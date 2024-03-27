import React from 'react'
import D from './D'

export default function C(props) {
    const {name} = props;
  return (
    <div>
        <div>C: {name}</div> 
        <D name={name}/>

    </div>
  )
}
