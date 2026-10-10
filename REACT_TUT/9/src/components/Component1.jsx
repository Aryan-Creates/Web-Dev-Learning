import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
  const counter = useContext(counterContext)
  return (
    <div>Component pehla{counter}</div>
  )
}

export default Component1