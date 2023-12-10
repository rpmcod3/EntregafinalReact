import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import NavBar from "./components/Navbar/Navbar.jsx"
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import Error from './components/Error/Error'
import Cart from './components/Cart/Cart';



 function App() {
  
   
  return (
    <>
  
   

    <BrowserRouter>
    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:idProduct'  element={<ItemDetailContainer/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>

      </Routes>

      <Footer/>
    </BrowserRouter> 
     
     
      </>
  )
}


export default App

