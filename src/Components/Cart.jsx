import React, { useState } from 'react'
import Product from './Product'

export default function Cart(props){
    let sum = 0

    function cartTotal(array){
        array.forEach(element => {
            sum += element.price            
        })
        return sum
    }

    function completePurchase(array){
        props.removeAllFromCart()
        sum = 0
    }

    return(
        <div id="container" style={{border: '1px solid purple'}}>
            <h4>Cart</h4>
            {props.cartArray.map((val, indx) => {
                return (<div id={indx} style = {{display: 'flex', justifyContent: 'space-around', flex: '1', border: '1px solid purple', backgroundColor: 'plum'}}>
                        <p style = {{display: 'inline', width: '250px'}}>name: {val.name} price: {val.price}</p>
                        </div>)
            })}
            <div style = {{display: 'flex', justifyContent: 'space-around', flex: '1', border: '1px solid purple', backgroundColor: 'plum'}}>
                <p id="total">Total: {cartTotal(props.cartArray)}</p>
                <button style = {{display: 'inline', marginBottom: '7px', marginTop: '7px'}}
                        onClick = {() => {completePurchase(props.cartArray)}}>Buy</button>
            </div>
        </div>
  )
}



// for(let i = 0; i < props.cartArray.length; i++){
//     let container = document.getElementById('container')
//     let div = document.getElementById(i)
//     console.log(container);
//     console.log(div);
//     // div.removeChild()
//     container.removeChild(div)
// }