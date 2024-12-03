import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'
import PlaceOrder from './Pages/PlaceOrder';
import Verify from './Pages/Verify.jsx'
import MyOrders from './Pages/MyOrders.jsx'

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/order",
      element:<PlaceOrder/>
    },
    {
      path:"/verify",
      element:<Verify/>
    },
    {
      path:"/myorders",
      element:<MyOrders/>
    }
  ]
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
