import React from 'react'
import { useContext } from 'react'
import { createContext1 } from '../App'


export default function D() {
    const data = useContext(createContext1);
    console.log("123",data);
    
  return (
    <div>D:</div>
  )
}
