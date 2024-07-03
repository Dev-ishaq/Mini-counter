import React, {useState} from 'react'

const Btn = () => {
    const [x, updateX] = useState(0)
  return (
    <div>
        <h2>{x}</h2>
      <button onClick={()=>updateX(x+1)}>+</button>
      <button onClick={()=>updateX(x-1)}>-</button>
    </div>
  )
}

export default Btn
