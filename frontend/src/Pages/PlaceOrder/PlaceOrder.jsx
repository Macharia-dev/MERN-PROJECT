import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { Form } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

const{getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

const [data,setData] =  useState({
  firstName:"",
  lastName:"",
  street: "",
  city: "",
  state: "",
  zipcode:"",
  country:"",
  phone: ""
})
const onChangeHandler = (event) => {
  const name =event.target.name;
  const value = event.target.value;
  const setData = (data=>({...data,[name]:value}))
}
useEffect(()=>{
console.log(data)
},[data])

  return (
    <form className='place-order'>
      <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'/>
            <input name='lastName' onChange={onChangeHandler} value={data.lastName}  type="text" placeholder='Last Name'/>
          </div>
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Adress' />
          <input name='street' onChange={onChangeHandler} value={data.street}  type="text" placeholder='Street' />
          <div className="multi-fields">
            <input name='city' onChange={onChangeHandler} value={data.city}  type="text" placeholder='City'/>
            <input name='state' onChange={onChangeHandler} value={data.state}  type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input name='zipcode' onChange={onChangeHandler} value={data.zipcode}  type="text" placeholder='Zip code'/>
            <input name='counttry' onChange={onChangeHandler} value={data.country}  type="text" placeholder='Country'/>
          </div>
          <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
                   <p>Subtotal</p>
                   <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount()===0?0:2}</p>
                 
            </div>
            <hr />
            <div className="cart-total-details">
                   <b>Total</b> 
                   <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                   
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>

      </div>

    </form>
  )
}

export default PlaceOrder
