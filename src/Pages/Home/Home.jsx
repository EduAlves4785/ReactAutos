import React, { useState,useEffect } from 'react'
import { MenuH } from '../../components/MenuH/MenuH'
import {NavBar,Content,BotaoOfertas,Categorias,Footer,Sobre} from './styles'
import {AiFillCar} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import { CarouselSlider } from '../../components/Carousel/CarouselSlider'
import banner from '../../assets/img/banner.png'

import categoria1 from '../../assets/img/categoria1.jpg'
import categoria2 from '../../assets/img/categoria2.jpg'
import categoria3 from '../../assets/img/categoria3.jpg'
import categoria4 from '../../assets/img/categoria4.jpg'
import categoria5 from '../../assets/img/categoria5.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {

  const ItemsCategoria=[
    {
      id:1,
      nome:"Sedans",  
      img:categoria1
    },
    {
      id:2,
      nome:"Elétricos",
      img:categoria2
    },
    {
      id:3,
      nome:"Picapes",
      img:categoria3
    },
    {
      id:4,
      nome:"Hatches",
      img:categoria4
    },
    {
      id:5,
      nome:"SUVs",
      img:categoria5
    }
  ]

  const[ofertas,SetOfertas]=useState([])

  useEffect(()=>{
    const url=`http://localhost:8081/anuncios`
    fetch(url)
     .then(resp=>resp.json())
     .then(data=>{
        SetOfertas(data.results)
     })
  },[])

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
        <Sobre>
          <div>
            <h2>Transformando a compra e venda de carros usados.</h2>
            <h3>Seminovos,usados e zero Km.</h3>
          </div>
          <img src={banner} alt='banner' height="100%"/>
        </Sobre>
        <Link to="/anuncios"><BotaoOfertas>Ver ofertas ( {ofertas.length} )</BotaoOfertas></Link>
        <Categorias>
          <h1>Categorias</h1><br/>
          <div>
            {ItemsCategoria.map((item)=><div key={item.id} className='cardItem'><img src={item.img} alt="imagens categorias de carro" width={200} height={120}/><h3>{item.nome}</h3></div>)}
          </div>
        </Categorias> 
      </Content>
      <Footer>
        <p>&copy; 2023 ReactAutos</p>
        <div>
          <h4>Redes sociais</h4>
          <AiOutlineFacebook fontSize={30}/>
          <AiOutlineInstagram fontSize={30}/>
          <AiOutlineYoutube fontSize={30}/>
        </div>
      </Footer>
    </>
  )
}
