import React from 'react'

const Imag = (props) => {
  return (
    <div className="container">
      <img src={props.imageName} alt="" />
      <h2>{props.fileName}</h2>
      <p>{props.caption}</p>
    </div>
  )
}

export default Imag
