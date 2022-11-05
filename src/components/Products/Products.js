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
4. current page: page number/index
*/

const Products = () => {
    // const { count, products } = useLoaderData() //load data using loader
    /***load products data using useState and useEffect****/
    const [products, setProducts] = useState([])
    const [count, setCount] = useState([])

    /* set cart state */
    const [cart, setCart] = useState([])

    /* set pagination state */
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    /* load all product data based on query */
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setProducts(data.products)
            })
    }, [currentPage, itemsPerPage])

    /* set number of pages */
    const numberOfPages = Math.ceil(count / itemsPerPage);

    /* load product cart */
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
        <div>
            {/*-------------------
             product showing part 
             -------------------*/}
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

            {/*----------------
             pagination part 
             ----------------*/}

            <div className='text-center mt-5 mb-5' >
                {/* <p> currently showing page {currentPage} and items per page {itemsPerPage}</p> */}

                {/* conditions for items per page */}
                <div className='flex items-center justify-center'>
                    <p className='mr-2 font-bold text-lime-300'>Show items per page</p>
                    <select onChange={event => setItemsPerPage(event.target.value)}>
                        <option value={10}>10</option>
                        <option value={5}>5</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>

                {/* create conditional pagination buttons */}
                <div className='flex-col items-center justify-center '>
                    <div>
                        {
                            [...Array(numberOfPages).keys()].map(page => <button
                                key={page}
                                className={currentPage === page ? 'btn btn-primary mr-2 mt-4' : 'btn mr-2 mt-4'}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;