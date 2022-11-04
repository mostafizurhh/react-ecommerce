import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css'

const OrderReview = ({ product, handleRemoveItemFromCart }) => {
    const { _id, name, price, quantity, img, shipping } = product;
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
                <button className='btn btn-circle bg-red-100' onClick={() => handleRemoveItemFromCart(_id)}>
                    <FontAwesomeIcon icon={faTrash} className='text-indigo-700'></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderReview;