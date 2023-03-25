import React, { useState,useEffect } from 'react'
import thumb from '../../assets/img/thumb.png'
import thumb2 from '../../assets/img/thumb2.png'
import thumb3 from '../../assets/img/thumb3.png'
import Carousel from 'react-elastic-carousel'
import './styles.css'
import { useRef } from 'react'

export const CarouselSlider = () => {

return (
  <Carousel className='main-carousel' enableAutoPlay autoPlaySpeed={3500}>
    <div>
      <img src={thumb} alt="thumb carro" width={800} height={300}/>
    </div>
    <div>
      <img src={thumb2} alt="thumb carro"  width={800} height={300}/>
    </div>
    <div>
      <img src={thumb3} alt="thumb carro"  width={800} height={300}/>
    </div>
  </Carousel>
  )
}
