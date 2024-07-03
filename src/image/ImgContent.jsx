import React from 'react'
import './Img.css'
import Imag from './Imag'
import image1 from '../assets/img1.png'
import image2 from '../assets/img2.png'
import image3 from '../assets/img3.jpg'


const ImgContent = () => {
  return (
    <>
      <Imag fileName='FX spread' caption='This is me' imageName={image1} />
      <Imag fileName='FX timeframe' caption='this is me' imageName={image2} />
      <Imag fileName='FX sign' caption='this is me' imageName={image3} />
    </>
  )
}

export default ImgContent
