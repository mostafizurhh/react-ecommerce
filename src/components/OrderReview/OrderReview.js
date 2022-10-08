import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css'

const OrderReview = ({ product, handleRemoveItemFromCart }) => {
    const { id, name, price, quantity, img, shipping } = product;
    return (
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
                <button onClick={() => handleRemoveItemFromCart(id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderReview;