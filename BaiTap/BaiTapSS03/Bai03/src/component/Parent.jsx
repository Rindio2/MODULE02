import React, { Component } from 'react'
import Children from './Childrent.jsx'; 

export default class Parent extends Component {
    getAge=()=> {
        console.log("Age",age);
    }
  render() {

    const{name} = this.props;
    return (
        <>
            <div>Parent</div>
            <Children name={name} age ={this.getAge}></Children>
        </>
      
    )
  }
}

