import React from 'react'
import '../assets/Store.css'
import Content from './Content'
import image1 from '../assets/img1.png'
import image2 from '../assets/img2.png'
import image3 from '../assets/img3.jpg'

const Store = () => {
  return (
    <div className='container'>
       <Content fileName="FX Spread"  imageName={image1} />
       <Content fileName="FX Session"  imageName={image2} />
       <Content fileName="Chart"  imageName={image3} />
    </div>
  )
}

export default Store
