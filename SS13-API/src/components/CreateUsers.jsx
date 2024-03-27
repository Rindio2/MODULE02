import React, { useEffect } from 'react'

export default function CreateUsers() {
    let newUser ={
        name: "Ha Linh"
    }
    useEffect(()=>{
        fetch("http://localhost:8000/users",{
            method :"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newUser)
        }
        )
        
    });
  return (
    
    <div>
        CreateUsers
        {/* muốn đi thêm user */}
    </div>
  )
}
