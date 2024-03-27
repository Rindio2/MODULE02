import React, { useEffect } from 'react'

export default function DeleteUsers() {
  useEffect(()=>{
    fetch("http://localhost:8000/users/7" ,{
        method:"DELETE"
    })
  },[])
  return (
    /*
    khi xóa user cần phải biết xóa user nào bằng cách biết id
     */
    
    <div>
        DeleteUsers
        
    </div>
  )
}
