// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React from 'react'

// export default function App() {
//   return (
//     <div>App111111111</div>
//   )
// }// rfc
import React, { Component } from 'react'
/*
  State: trạng thái
    viết code js bên trong html thì bọc dấu {}
    khi state thay đổi thì component re-render(render lại)
    khi nào state thay đổi(khi đi setState)
  prop: thuộc tính
    dùng để truyền dữ liệu từ component cha xuống dưới component con.
    muốn truyền dữ liệu từ 
  event: hành động tương tác
*/

import Products from './component/Products.jsx';


export default class App extends Component {

  constructor(){
    super()
    this.state={
      student:[{
        name: "thu",
        id :1,

      }],
      isActive:false,
      title: "hoc lap trinh",

    }
  }

  render() {

    const std = ["tuan", "hao", "tinh"];
    const handleClick=()=>{
      this.setState({
        title: "hoc di troi"
      })
    }

    return (
      <>
        <div>App</div>

        <ul>
          {std.map((item,index)=>{
            return <li key={index} >{item}</li>
          })}
        </ul>
        <p>title :{this.state.title}</p>
        <button onClick={handleClick}>sds</button>
        <Products student={this.state.student}></Products>
      </>
    );
  }
}
