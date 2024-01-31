import React, { Component } from 'react'
import Product from './Product.jsx'

export default class Products extends Component {
  render() {
    // hung du lieu
    let {student}=this.props;
    let data= this.props;
    console.log("111", data);
    return (
      <div>
        
        <p>list product</p>

        <Product data={student}></Product>
        {/* {
            student.map((item,index)=>{
                return <Product data={student}></Product>
            })
        } */}
      </div>
    )
  }
}
