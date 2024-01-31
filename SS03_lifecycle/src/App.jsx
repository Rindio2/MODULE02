import React, { Component } from 'react'
import Form from './components/Form.jsx'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      name: "hoa",
      isLog: false,
    }
  }
  componentDidUpdate(){
    console.log("Giai doan 3: componentDidUpdate");
  }
  componentWillUpdate(){
    console.log("Giai doan 3: componentWillUpdate");
  }
  shouldComponentUpdate(){
    console.log("Giai đoạn 3");
    return true;
  }
  componentDidMount(){
    // quan trọng
    console.log("componentDidMount");

  }
  componentWillMount(){
    console.log("componentWillMount");
  }
  render() {
    console.log("component re-render");
    return (
      <>
      
      <div>App</div>
      <p>{this.state.name}</p>
      <button onClick={()=> this.setState({name:"hue"})}>chang</button>
      <Form></Form>
      </>
    )
  }
}
