import React,{useEffect, useState} from 'react'
import {NavBar,Content,Card,ContainerAnuncios,CardAnuncio} from './styles'
import { Link, useParams } from 'react-router-dom'
import {AiFillCar} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import User from '../../assets/img/user.png'
import { FormAnuncio } from '../../components/FormCriarAnuncio'

export const Conta = () => {

  const{cpf}=useParams()
  const url=`http://localhost:8081/usuario/${cpf}`
  const requestData=()=>fetch(url).then(res=>res.json())
  const[cliente,setCliente]=useState()
  const[anuncios,setAnuncios]=useState([])
  const[urlimagem,SetUrlimagem]=useState()

  useEffect(()=>{
    requestData().then(data=>setCliente(data[0]))
  },[])

  function nome(str) {
    var arr = str.split(' ');
    if (arr[1][0].toUpperCase() != arr[1][0]) arr.splice(1, 1);
    return arr.slice(0, 2).join(' ');
  }

  function formatDate( date ){
    if( typeof date === "number" ) date = date.toString();

    //Posição 0, 4 digitos = ano
    //Posição 4, 2 digitos = mes
    //Posição 6, 2 digitos = dia
    return `${date.substr(8, 2)}/${date.substr(5, 2)}/${date.substr(0, 4)}`;
  }

  useEffect(()=>{
    const url=`http://localhost:8081/clienteanuncios/${cpf}`
    fetch(url)
    .then(async response=>await response.json())
    .then(data=>{
      setAnuncios(data.results)
      SetUrlimagem(data.url)
    })
  },[anuncios])

  function deleteAnuncio(id){
    const urlDel=`http://localhost:8081/apagaranuncio/${id}`
    fetch(urlDel,{ method: 'DELETE' })
  }

  return (
    <>
        <NavBar>
            <Link to="/">
                <h1>ReactAutos</h1>
                <AiFillCar fontSize={45}/>
            </Link>
        </NavBar>
        <Content>
          <Card>
            <img src={User} width='100px' height="100px"/>
            {cliente?<h3>Olá {nome(cliente.nome)}</h3>:" "}
            <h4><MdEmail fontSize={20}/>{cliente?cliente.email:" "}</h4>
          </Card>
          <Card>
            <h1>Minhas informações</h1>
            <h4>Nome completo:{cliente?cliente.nome:" "}</h4>
            <h4>Nascimento:{cliente?formatDate(cliente.nascimento):" "} </h4>
            <h4>Telefone:{cliente?cliente.telefone:" "} </h4>
            <h4></h4>
          </Card>
          <span>Meus anúncios
            <ContainerAnuncios>
              {anuncios?anuncios.map((item)=><CardAnuncio key={item.id}>
                <img src={urlimagem + item.imagem} alt="Imagem carro" width="100%"/>
                <h4>{item.marca + " " + item.nome}</h4>
                <h4>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                <Link to={`/anuncio/${item.id}`}><button>Ver anúncio</button></Link>
                <button style={{background: "RGB(255 47 47)"}} onClick={()=>deleteAnuncio(item.id)}>Apagar anúncio</button>
              </CardAnuncio>):"Não há anúncios"}
            </ContainerAnuncios>
          </span><br/>
          <span>Criar anúncio
            <FormAnuncio/>
          </span>
        </Content>
    </>
  )
}
