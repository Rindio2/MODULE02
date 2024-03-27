import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {

    const [count,setCount]= useState(0);
    const refHook= useRef(0);// const refHook= useRef()
    // console.log(ref);
    // trả về object trong object có một thuộc tính mặc định là current
    const obj={
        count:0,
    }

    const handleIncrease=()=>{
        obj.count=obj.count+1;
        console.log("count sau khi click",obj.count);
        refHook.current=refHook.current+1;
        setCount(count+1);
    }
    //focus vào ô muốn nhập
    useEffect(()=>{
        refHook.current.focus();
    })

  return (
    <>
        UseRef

        <p>count: {refHook.current}</p>
        <button onClick={handleIncrease}>click</button> <br />
        <label htmlFor="">input</label>
        <input type="text" ref={refHook} /> 
        {/* focus vào ô muốn nhập */}
    </>
  )
}
