import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart) //using useState() as we want to remove any item from cart

    const handleRemoveItemFromCart = id => {
        const remainingItemInCart = cart.filter(product => product.id !== id);
        setCart(remainingItemInCart)
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);

    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <OrderReview
                        key={product.id}
                        product={product}
                        handleRemoveItemFromCart={handleRemoveItemFromCart}
                    ></OrderReview>)
                }

            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;