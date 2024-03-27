import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'

export default function Delete_1() {
    useEffect(()=>{
        let UserId=1;
        axios.delete(`http://localhost:8000/users/${UserId}`)
    },[])
  return (
    <div>Delete_1</div>
  )
}
