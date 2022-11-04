import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart) //using useState() as we want to remove any item from cart

    const handleRemoveItemFromCart = id => {
        const remainingItemInCart = cart.filter(product => product._id !== id);
        setCart(remainingItemInCart)
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);

    }
    return (
        <div className='shop-container'>
            <div className='flex items-center justify-center'>
                <div>
                    {
                        cart.map(product => <OrderReview
                            key={product._id}
                            product={product}
                            handleRemoveItemFromCart={handleRemoveItemFromCart}
                        ></OrderReview>)
                    }
                    {/* if cart is empty, it will show following message */}
                    {
                        cart.length === 0 && <h2>No items to review. Please choose your items <Link to='/home'>here</Link>. </h2>
                    }

                </div>
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to='/shipping'>
                        <button className='btn btn-success capitalize'>Proceed to Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;