import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    let itemsTotalPrice = 0
    let totalShipping = 0
    for (const product of cart) {
        itemsTotalPrice = itemsTotalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = +(itemsTotalPrice * .1).toFixed(2);

    const grandTotal = itemsTotalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p><small>Selected Items: {cart.length}</small></p>
            <p><small>Items Total Price: ${itemsTotalPrice}</small></p>
            <p><small>Total Shipping: ${totalShipping}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;