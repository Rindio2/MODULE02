import React,{useMemo, useState} from 'react'

export default function UseMemo() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [cart,setPay]=useState([]);
    const addToCart=()=>{
        setPay([...cart,{
            name:name,
            price:+price,
            quantity:+quantity,
        }])
    }
    console.log("cart",cart);
    let result=  useMemo(()=>{
        console.log("tính toán giá phải trả");
       let pay= cart.reduce((accumulator,item)=>{
        return accumulator+item.price*item.quantity
    },0)
    return pay
    },[cart])
    
    // function tăng count
    const increase=()=>{
        setCount(count+1)
    }
  return (
    <>
     UseMemo
     {/* 
        Cho 3 ô input người dùng sẽ nhập giá trị tên, giá, số lượng sản phẩm
        sau đó sẽ in ra tổng hoá đơn ngườI dùng mua.

      */}
      <br />
      <label htmlFor="">nhập tên</label>
      <input 
      type="text"
      onChange={(event)=>setName(event.target.value)}
       /> <br />
       <label htmlFor="">nhập giá</label>
      <input 
      type="text"
      onChange={(event)=>setPrice(event.target.value)}
       /> <br />
       <label htmlFor="">nhập số lượng</label>
      <input 
      onChange={(event)=>setQuantity(event.target.value)}
      type="text" /> <br />
      <button onClick={addToCart}>mua</button>
      {/* 
            Các bước làm
            bước 1:dùng onchange để lấy ra các giá trị
            bước 2:lưu vào state là 1 cái mảng để chứa các object
            bước 3: dùng hàm để tính
            bước 4: hiển thị kết quả
       */}
       <button onClick={increase}>tăng count</button>
       <button>giá phải trả : {result}</button>
    </>
  )
}
