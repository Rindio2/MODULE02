import React from 'react'
import C from './C.jsx'

export default function B(props) {
    const {name} = props;
  return (
    <div>
        <div>B: {name}</div>
        <C name={name}/>
    </div>
  )
}
