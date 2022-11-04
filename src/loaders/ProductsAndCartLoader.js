import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('http://localhost:5000/products');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const initialCart = [];

    for (const id in savedCart) {
        const addedProducts = products.find(product => product._id === id);
        if (addedProducts) {
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts);
        }
    }
    console.log(initialCart)

    return { products: products, initialCart: initialCart };
}