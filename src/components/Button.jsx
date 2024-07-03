import React, {useState} from 'react'

const Button = () => {
  const [btn, updateBtn] = useState(0)
  const [load, updateLoad] = useState('Count')
  return (
    <div>
     
      <button onClick={()=>{
        updateBtn(btn+1)
        // updateLoad('Loading...')
      }
      }>{load}: {btn}</button>
    </div>
  )
}

export default Button
