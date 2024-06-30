import { useState } from 'react'
import './App.css'
import MainPage from './Components/MainPage'
import Cart from './Components/Cart'

function App(){
  const [productsArray, setProductsArray] = useState([
    {name: 'Bread', price: 15.9},
    {name: 'Milk', price: 7.11},
    {name: 'Butter', price: 10},
    {name: 'Soda', price: 21.9},
    {name: 'Shampoo', price: 21.9},
    {name: 'Coffee', price: 29.9},
  ])

  const [cartArray, setCartArray] = useState([])

  function addProductToList(name, price){
    let tmp = [...productsArray]
    setProductsArray([...tmp, {name, price}])
  }

  function addProductToCart(name, price){
    let tmp = [...cartArray]
    setCartArray([...tmp, {name, price}])
  }

  function removeAllFromCart(){
    setCartArray([])
  }

  return(
    <div style = {{width: '400px'}}>
      <div id='mainPageDiv' style={{visibility: 'visible'}}>
        <MainPage productsArray = {productsArray} addProductToCart = {addProductToCart} addProductToList = {addProductToList}/>
      </div>
      <br />
      <br />
      <br />
      <div id='cartDiv' style={{visibility: 'hidden'}}>
        <Cart cartArray = {cartArray} addProductToCart = {addProductToCart} removeAllFromCart = {removeAllFromCart}/>
      </div>
    </div>
  )
}

export default App
