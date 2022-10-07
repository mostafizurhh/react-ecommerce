import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders'
import Products from './components/Products/Products'
import Inventory from './components/Inventory/Inventory'
import Shop from './components/Shop/Shop'
import About from './components/About/About'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Products></Products> //component
        },
        {
          path: '/home',
          loader: () => fetch('products.json'), //call api
          element: <Products></Products>
        },
        {
          path: '/orders',
          loader: () => fetch('products.json'), //call api
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
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
