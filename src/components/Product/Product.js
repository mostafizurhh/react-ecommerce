import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img
                src={img}
                alt=""
                //if no image found
                onError={(e) => {
                    e.currentTarget.src = 'https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM='
                }} />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;