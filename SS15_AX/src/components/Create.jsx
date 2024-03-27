import React from 'react'
import { useEffect } from 'react'
import a from "axios"
export default function Create() {
    useEffect(()=>{
        let newUser={
            name: "van anh"
        }
        a.post("http://localhost:8000/users",newUser)
    },[])
  return (
    <div>
        Create



    </div>
  )
}
