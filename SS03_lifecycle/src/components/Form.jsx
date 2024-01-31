import React, { Component } from 'react'

export default class Form extends Component {
  // khi làm với form ngăn chặn việc submit form
  constructor(){
    super()
    this.state={
      username:"",
      password:""
    }
  }
  render() {
    const login=(e)=>{ 
      e.preventDefault();
      
      console.log("dda cahy");
    }
    const changeVale(){
      let Username
    }
    
    return (
      <div> 
        <label htmlFor="">Username:</label>
        <input type="text" onChange={changeVale} /> <br />
        <label htmlFor="">Pass:</label>
        <input type="text" onChange={changeVale}  /> <br />
        <button onClick={()=>login(event)}> login</button>
      </div>
    )
  }
}
