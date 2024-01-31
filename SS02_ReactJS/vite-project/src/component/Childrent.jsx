import React, { Component } from 'react'
export default class Childrent extends Component {
  constructor(){
    super()
    this.state={
      age:20,
    }
  }
  render() {  
    const {name,age} = this.age
    
    return (
      <div>
        chilrent
        nhập dữ liệu từ App: {name}
      </div>
    )
  }
}
