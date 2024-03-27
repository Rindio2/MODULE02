import React from 'react'
// import UseState from './component/UseState.jsx'
import UseEfec from './component/UseEfec.jsx'
import UseContext from './component/UseContext.jsx'
import A from './component/A.jsx'
import { useState } from 'react'
import { createContext } from 'react'

export const createContext1= createContext();
export default function App() {
  const [name,setName]=useState("hoa");
  
  return (
    <>
      <div>App</div>
      {/* <UseState></UseState> */}
      <UseEfec></UseEfec>
      <UseContext></UseContext>
      
      <createContext1.Provider value={name}>
      <A></A>
      </createContext1.Provider>
    </>
  )
}
