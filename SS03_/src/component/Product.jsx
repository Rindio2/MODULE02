import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    let {data} = this.props;
    console.log("123",data);
    return (
      <div>
        
        Product

      </div>
    )
  }
}
