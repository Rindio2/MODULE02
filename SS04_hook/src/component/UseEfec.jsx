import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


export default function UseEfec() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("12312323");
        // thường dùng callAPI
        // có tác dụ gọi API sử lý thì thường dùng Effect


    },[])

    // component didMount
    /*
        có 3 cách dùng
            cách 1: 
            cách 2: thêm []
            cách 3: trong [] chứa dependency(sự phụ thuộc)
            - khi dependency thay đổi thì useEffect mới được gọi
     */
  return (
    <> 
        
        <div>UseEfec</div>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count +1)}>click</button>    
    </>
    
  )
}
