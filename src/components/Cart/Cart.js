import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart, children }) => {
    let itemsTotalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity;
        itemsTotalPrice = itemsTotalPrice + (product.price * product.quantity);
        totalShipping = totalShipping + (product.shipping * product.quantity);
    }
    const tax = +(itemsTotalPrice * .1).toFixed(2);

    const grandTotal = itemsTotalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p><small>Selected Items: {quantity}</small></p>
            <p><small>Items Total Price: ${itemsTotalPrice}</small></p>
            <p><small>Total Shipping: ${totalShipping}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            <br /> <br />
            {children}
        </div>
    );
};

export default Cart;