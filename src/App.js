import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders'
import Products from './components/Products/Products'
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About'
import { productsAndCartLoader } from './loaders/ProductsAndCartLoader';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: () => fetch('http://localhost:5000/products'), //call api
          element: <Products></Products> //component
        },
        {
          path: '/home',
          // loader: () => fetch('http://localhost:5000/products'), //call api
          element: <Products></Products>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader, //call common loader function
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '/about',
      element: <About></About>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
