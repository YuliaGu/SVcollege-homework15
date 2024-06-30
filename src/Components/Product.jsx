import React from 'react'

export default function Product(props){
    const {addProductToCart} = props
    // function addToCart(name, price){
    // }
    // function addToCart = props.addToCart

  return(
    <div style = {{display: 'flex', justifyContent: 'space-around', flex: '1', border: '1px solid purple', backgroundColor: 'plum'}}>
        <p style = {{display: 'inline', width: '250px'}}>name: {props.name} price: {props.price}</p>
        <button onClick = {() => {props.addProductToCart(props.name, props.price)}} style = {{display: 'inline', marginBottom: '7px', marginTop: '7px'}}>+</button>
    </div>
  )
}
