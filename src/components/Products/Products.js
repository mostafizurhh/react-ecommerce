import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const products = useLoaderData()     //load data using loader
    const [cart, setCart] = useState([])

    /*********load data using useState and useEffect***** 
     
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []) 
    ******************************************************/

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProducts) => {
        let newCart = [];
        const existsProduct = cart.find(product => product.id === selectedProducts.id);
        if (!existsProduct) {
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProducts.id);
            existsProduct.quantity = existsProduct.quantity + 1;
            newCart = [...rest, existsProduct]

        }
        setCart(newCart)
        addToDb(selectedProducts.id)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;