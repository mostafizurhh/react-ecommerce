import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart) //using useState() as we want to remove any item from cart
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <OrderReview
                        key={product.id}
                        product={product}
                    ></OrderReview>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;