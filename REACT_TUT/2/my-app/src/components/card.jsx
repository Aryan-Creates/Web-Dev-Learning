import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div className='card'>
        <img src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-cat-bath-1035x780.jpg" alt="ok" width={354} height={168}
        style={{border: "4px solid red"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default card