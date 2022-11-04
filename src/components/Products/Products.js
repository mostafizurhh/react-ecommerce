import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './products.css'

/* 
REQUIRED FOR PAGINATION
1. count of total products/data : done (73)
2. products/data shown per page : 10
3. total page = total products/data per page >> 73/10 >> 7.3 >> 8
4. page number/index
*/

const Products = () => {
    const { count, products } = useLoaderData()     //load data using loader
    const [cart, setCart] = useState([])
    const itemsPerPage = 10;

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
            const addedProduct = products.find(product => product._id === id);
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
        const existsProduct = cart.find(product => product._id === selectedProducts._id);
        if (!existsProduct) {
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProducts._id);
            existsProduct.quantity = existsProduct.quantity + 1;
            newCart = [...rest, existsProduct]
        }
        setCart(newCart)
        addToDb(selectedProducts._id)
    }

    //clear full cart and remove items from database
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className='cart-container text-center'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    {/* we will get this button as a children of Cart component */}
                    <Link to='/orders'>
                        <button className='btn btn-success'>Review Items</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Products;