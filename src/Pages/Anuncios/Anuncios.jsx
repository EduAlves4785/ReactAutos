import React, { useState,useEffect } from 'react'
import {NavBar,Content,Filtro,ContainerAnuncios} from './styles'
import { MenuH } from '../../components/MenuH/MenuH'
import { AiFillCar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Anuncios = () => {
    const[anuncios,setAnuncios]=useState([])
    const[urls,setUrls]=useState([])

    const[localizacao,setLocalizacao]=useState()
    const[marca,setMarca]=useState()
    const[anomin,setAnoMin]=useState()
    const[anomax,setAnoMax]=useState()
    const[precomin,setPrecoMin]=useState()
    const[precomax,setPrecoMax]=useState()
    const[kmmin,setKmMin]=useState()
    const[kmmax,setKmMax]=useState()

    useEffect(()=>{
        const url=`http://localhost:8081/anuncios`
        fetch(url)
         .then(resp=>resp.json())
         .then(data=>{
            setAnuncios(data.results)
            setUrls(data.url)
         })
    },[localizacao,marca,anomax,anomin,precomax,precomin,kmmin,kmmax])

    function handleEstadoChange(event) {
        setLocalizacao(event.target.value);
    }

    function filtrar(){
        if(!localizacao==" "){
            const item=anuncios.filter(anuncio=>anuncio.estado===localizacao)
            setAnuncios(item)
        }else if(!marca==" "){
            const marcaCarro=marca.toLowerCase()
            console.log(marcaCarro)
            const item=anuncios.filter(anuncio=>anuncio.marca===marcaCarro)
            setAnuncios(item)
        }else if(!anomin==" " || !anomax==" "){
            if(!anomin==" "){
                const item=anuncios.filter(anuncio=>anuncio.ano>=anomin)
                setAnuncios(item)
            }if(!anomax==" "){
                const item=anuncios.filter(anuncio=>anuncio.ano<=anomax)
                setAnuncios(item)
            }if(!anomin==" " && !anomax==" "){
                const item=anuncios.filter(anuncio=>anuncio.ano>=anomin && anuncio.ano<=anomax)
                setAnuncios(item)
            }
        }else if(!precomin==" " || !precomax==" "){
            if(!precomin==" "){
                const item=anuncios.filter(anuncio=>anuncio.preco>=precomin)
                setAnuncios(item)
            }if(!precomax==" "){
                const item=anuncios.filter(anuncio=>anuncio.preco<=precomax)
                setAnuncios(item)
            }if(!precomin==" " && !precomax==" "){
                const item=anuncios.filter(anuncio=>anuncio.preco>=precomin && anuncio.preco<=precomax)
                setAnuncios(item)
            }
        }else if(!kmmin==" " || !kmmax==" "){
            if(!kmmin==" "){
                const item=anuncios.filter(anuncio=>anuncio.quilometragem>=kmmin)
                setAnuncios(item)
            }if(!kmmax==" "){
                const item=anuncios.filter(anuncio=>anuncio.quilometragem<=kmmax)
                setAnuncios(item)
            }if(!kmmin==" " && !kmmax==" "){
                const item=anuncios.filter(anuncio=>anuncio.quilometragem>kmmin && anuncio.quilometragem<=kmmax)
                setAnuncios(item)
            }
        }
    }

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
            <Filtro>
                <div>
                    <label>Estado</label>
                    <select value={localizacao} onChange={handleEstadoChange}>
                        <option value="">Selecione um estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
                <div>
                    <label>Marca do carro</label>
                    <select value={marca} onChange={(e)=>setMarca(e.target.value)}>
                        <option value="">Selecione uma marca</option>
                        <option value="audi">Audi</option>
                        <option value="bmw">BMW</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="citroen">Citroen</option>
                        <option value="fiat">Fiat</option>
                        <option value="ford">Ford</option>
                        <option value="honda">Honda</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="jac">JAC Motors</option>
                        <option value="jeep">Jeep</option>
                        <option value="kia">Kia</option>
                        <option value="landrover">Land Rover</option>
                        <option value="lexus">Lexus</option>
                        <option value="mercedes">Mercedes-Benz</option>
                        <option value="mitsubishi">Mitsubishi</option>
                        <option value="nissan">Nissan</option>
                        <option value="peugeot">Peugeot</option>
                        <option value="porsche">Porsche</option>
                        <option value="renault">Renault</option>
                        <option value="subaru">Subaru</option>
                        <option value="suzuki">Suzuki</option>
                        <option value="troller">Troller</option>
                        <option value="toyota">Toyota</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="volvo">Volvo</option>
                        <option value="chery">Chery</option>
                        <option value="byd">BYD</option>
                        <option value="jaguar">Jaguar</option>
                        <option value="ferrari">Ferrari</option>
                        <option value="maserati">Maserati</option>
                    </select>
                </div>
                <div>
                    <label>Ano</label>
                    <input type="number" placeholder='de' onChange={(e)=>setAnoMin(e.target.value)}/>
                    <input type="number" placeholder='até'onChange={(e)=>setAnoMax(e.target.value)}/>
                </div>
                <div>
                    <label>Preço</label>
                    <input type="number" placeholder='de' onChange={(e)=>setPrecoMin(e.target.value)}/>
                    <input type="number" placeholder='até'onChange={(e)=>setPrecoMax(e.target.value)}/>
                </div>
                <div>
                    <label>Quilometragem</label>
                    <input type="number" placeholder='de' onChange={(e)=>setKmMin(e.target.value)}/>
                    <input type="number" placeholder='até'onChange={(e)=>setKmMax(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>{filtrar()}}>Pesquisar</button>
                </div>
            </Filtro>
            <ContainerAnuncios>
                {anuncios.length>0&& anuncios.map((item)=>
                    <div key={item.id}>
                        <img src={urls + item.imagem} alt="Imagem do anúncio" width="100%" height="50%"/>
                        <h3>{item.marca + " " + item.nome}</h3>
                        <h3>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                        <span><h5>{item.ano+" . "+item.estado+" . "+item.quilometragem.toLocaleString('pt-BR')} Km</h5></span>
                        <Link to={`/anuncio/${item.id}`}><button>Contato</button></Link>
                    </div>
                )}
            </ContainerAnuncios>
        </Content>
    </>
  )
}
