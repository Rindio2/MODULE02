import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
    /*
        lấy dữ liệu từ trong kho ra dùng
        useSelector
        khi muốn cập nhật state mới thì dùng useDispatch()
    */
    let data= useSelector((state)=>{
        console.log(state);
        return state;
    })
    let dispatch = useDispatch()
    const increase=()=>{
        dispatch({
            type:"increase"
        })
    }
    const decrease=()=>{
        dispatch({
            type:"decrease"
        })
    }

  return (
    <div>
        <p>Count: {data.countReducer.map((item)=>{
            return <p>{item}</p>
        })}</p>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
    </div>
  )
}
