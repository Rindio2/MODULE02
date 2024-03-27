import React, { useEffect } from 'react'

export default function UpdateUsers() {
    
    useEffect(()=>{
        let newUser={
            name:"Minhvu"
        }
        fetch("http://localhost:8000/users/2",
        {
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newUser)
        })
    },[])
  return (
    <div>
        UpdateUsers
    </div>
  )
}
