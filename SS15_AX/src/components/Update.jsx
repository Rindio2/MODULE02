import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export default function Update() {
    /**
     * put : cập nhật các trường muốn cập nhật không giữ lại cái cũ
     * patch : cập nhật các trường muốn cập nhật giữ cái cũ
     */
    useEffect(()=>{
        let newUser={
            name:"lan"
        }
        axios.put(`http://localhost:8000/users/3`,newUser)
    },[])
  return (
    <div>
        Update
        
    </div>
  )
}
