import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
    },
    {
      path: '/shop',
      element: <Shop></Shop>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
