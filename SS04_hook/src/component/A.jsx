import React from 'react'
import B from './B'

export default function A(props) {
    const {name} = props;
  return (
    <>

        <div>A: {name}</div>
        <B name={name} />
    
    </>
  )
}
