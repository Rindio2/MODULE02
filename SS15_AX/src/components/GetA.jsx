import React from 'react'
import { useEffect } from 'react'
import axios from "axios"

export default function GetA() {
    useEffect(()=>{
        axios.get("http://localhost:8000/users")
        .then(res=>{
            console.log("response",res);
        })
    },[])
  return (
    <div>
        GetA

    </div>
  )
}
