import React from 'react';
import {
  createBrowserRouter,
  RouterProvider ,
   Outlet

} from "react-router-dom" ;
import Home from './pages/home/Home';
import Users  from "./pages/users/Users"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Product  from "./pages/product/Product" ;
import User  from "./pages/user/User"
import Products  from "./pages/products/Products"
import Login from './pages/login/Login';
import "./styles/global.scss"
import Game from './pages/game/Game';
function App() {


  const Layout = () =>{
    return (
    <div className='main'>
      <Navbar/>
<div className='container'>
  <div className='menuContainer'>
       <Menu/>
  </div>
  <div  className=' contentContainer'>
   <Outlet/>
</div>
</div>

     
      <Footer/>

    </div>
    );
  };
  const router = createBrowserRouter([

     {path : "/" ,
    element: <Layout/> ,
    children : [
      {
        path : "/",
        element : <Home />,
       
      },
      {
        path : "/users",
        element:<Users />
      },
      {
        path : "/products",
        element:<Products />
      },
      {
        path : "/product/:id",
        element:<Product />
      },
      {
        path : "/user/:id",
        element:<User />
      },
    ]
  }  ,
  {
    path : "/login",
    element:<Login/>
  },
  {
    path : "/game",
    element:<Game/>
  },
  
  ]) ;
 
   return (
    <RouterProvider router = {router}/> 
   
) ;
}

export default App;
