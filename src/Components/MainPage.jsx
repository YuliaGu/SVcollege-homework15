import React from 'react'
import Product from './Product'

export default function MainPage(props){
    function setVisibility(){
        let mainPageDiv = document.getElementById('mainPageDiv')
        let cartDiv = document.getElementById('cartDiv')

        mainPageDiv.style = {visibility: 'hidden'} //doesn't work...
        cartDiv.style = {visibility: 'visible'} 
    }

  return(
    <div>
        <div style = {{border: '1px solid purple', display: 'flex', justifyContent: 'space-around'}}>
            <button style = {{display: 'inline', marginBottom: '7px', marginTop: '7px'}}>
                Home Page
                {/* <img src='' alt='Home page'/> */}
            </button>
            <h4>SV-Shop</h4>
            <button onClick={setVisibility} style = {{display: 'inline', marginBottom: '7px', marginTop: '7px'}}>
                Cart
                {/* <img src='./Images/shoppingCart' alt='Cart'/> */}
            </button>
        </div>
        <div>
            {props.productsArray.map((val) => {
                return <Product name = {val.name} price = {val.price} addProductToCart = {props.addProductToCart} addProductToList = {props.addProductToList}/>
            })}
        </div>
    </div>
  )
}
