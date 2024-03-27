
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { increase1 } from './redux-toolkit/reducers/counter';

export default function App() {
  const counter = useSelector((state)=>{
    return state;
  })
  const disPatch= useDispatch();
  const increase =()=>{
    disPatch(increase1())
  }
  return (
    <div>
      App
      <p>giá trị biến count: {counter.counter11.value}</p>
      <button onClick={increase}>tawng</button>
    </div>
  )
}

