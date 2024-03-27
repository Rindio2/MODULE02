import React, { useState } from 'react'
import UseRef from './component/UseRef'
import UseReducer from './component/UseReducer'
import UseCallback from './component/UseCallback'
import UseMemo from './component/UseMemo'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick=()=>{
    setCount(count+1);
  }
  const useCallback=()=>{

  }
  return (
    <>
      <div>App</div>
      {/* <UseRef></UseRef> */}

      <UseReducer></UseReducer>
      <UseCallback memo={useCallback}></UseCallback>
      <button onClick={handleClick}>click</button>
      ----------------------------
      <UseMemo></UseMemo>
    </>
    
  )
}
