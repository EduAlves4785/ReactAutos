import React,{useState,useEffect} from 'react'
import {NavBar,Content,ContainerCarro,CardAnunciante} from './styles'
import {AiFillCar} from 'react-icons/ai'
import {MenuH} from '../../components/MenuH/MenuH'
import { Link, useParams } from 'react-router-dom'

export const Anuncio = () => {
  const[dados,setDados]=useState([])
  const[Anunciante,setAnunciante]=useState([])
  const[url,setUrl]=useState()
  const {id}=useParams()

  useEffect(()=>{
    const url=`http://localhost:8081/umanuncios/${id}`
    fetch(url)
     .then(resp=>resp.json())
     .then(data=>{
        setDados(data.results)
        setUrl(data.url)
        console.log(getAnunciante(data.results[0].cpf))
     })
  },[])

  async function getAnunciante(cpf){
    const url=`http://localhost:8081/usuario/${cpf}`
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      setAnunciante(data)
    })
  }

  console.log(Anunciante)

  return (
    <>
        <NavBar>
            <Link to="/">
                <h1>ReactAutos</h1>
                <AiFillCar fontSize={45}/>
            </Link>
            <MenuH/>
        </NavBar>
        <Content>
            {dados.map((item)=>
              <ContainerCarro key={item.id}>
                <div className='anuncio'>
                  <h1>{item.marca} <span>{item.nome}</span></h1>
                  <img src={url+item.imagem} width="100%" height="90%"/>
                </div>
                <CardAnunciante>
                  {Anunciante.map((i)=>
                    <div key={i.id}>
                      <h1>Anunciante: {i.nome}</h1>
                      <h3>Cidade: {i.cidade}/{i.estado}</h3>
                      <h3>Número: {i.telefone}</h3><br/>
                      <h1>{item.marca + " "+ item.nome + " "+ item.ano}</h1>
                      <h2>Quilometragem  {item.quilometragem.toLocaleString('pt-BR')} Km</h2>
                      <h2>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                    </div>)}
                </CardAnunciante>
              </ContainerCarro>
            )}
        </Content>
    </>
  )
}
