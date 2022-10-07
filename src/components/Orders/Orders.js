import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart) //using useState() as we want to remove any item from cart
    return (
        <div className='shop-container'>
            <div className='product-container'>

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;