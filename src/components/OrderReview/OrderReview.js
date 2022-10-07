import React from 'react';
import './OrderReview.css'

const OrderReview = ({ product }) => {
    const { name, price, quantity, img, shipping } = product;
    return (
        <div className='review-order'>
            <div className="review-order-details">
                <div className='cart-item-details'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='cart-item-info'>
                        <p>{name}</p>
                        <p><small>Price: ${price}</small></p>
                        <p><small>Quantity: {quantity}</small></p>
                        <p><small>Shipping Charge: ${shipping}</small></p>
                    </div>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>



        </div>
    );
};

export default OrderReview;