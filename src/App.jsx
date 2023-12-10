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
import { CartProvider } from './context/CartContext.jsx'

/* import {getFirestore,collection,getDocs} from "firebase/firestore"; */


 function App() {

  /* const [product,setProduct] = useState(null)

    useEffect(()=> {
      const db = getFirestore()

      const collectionRef = collection(db,"productos")
      getDocs(collectionRef).then((snapshot)=> {
        setProduct(snapshot.docs.map((doc) =>(
          {id: doc.id,...doc.data()}
        )))

      })
      

  
 },[])
   
 console.log(product) */


  return (
    <>
  
   

    <BrowserRouter>

    <CartProvider>

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

      </CartProvider>

    </BrowserRouter> 
     
     
      </>
  )
}


export default App

