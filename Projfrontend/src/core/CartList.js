import React from 'react';
import CartItem from './CartItem';

const CartList = ({value}) => {
    const {cart}= value;
    return <div className="continer">
       {cart.map(item=>{
         return  <CartItem/>
       })}
        
    </div>;
}
 
export default CartList;