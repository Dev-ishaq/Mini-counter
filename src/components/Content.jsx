import React from 'react'

const Content = (props) => {
  return (
    <>
       <div className="content">
        <img src={props.imageName} alt="" />
        <h2>{props.fileName}</h2>
       </div>
    </>
  )
}

export default Content
