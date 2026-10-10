import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
  const counter = useContext(counterContext)
  return (
    <div>
    <button onClick={()=> value.setCount((count)=> count + 1)}>
    <span><Component1/></span>Button hai ye {counter.count}
    </button>
    </div>
  )
}

export default Button