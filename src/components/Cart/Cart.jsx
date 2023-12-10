
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
/* import Item from '../Item/Item'; */
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart,total, clearCart, removeItem } = useContext(CartContext)  
    console.log(cart)



  return (
    <div>
      <h1>Tu Carrito </h1>

      <div>

      
        {

            cart.lenght == 0 ? 
            <div>
              <h2> No hay productos en el Carrito</h2>
              <Link to={"/"}>Ir al Inicio</Link>             
               </div>
               :
               <div>
                  {
                      cart.map((p)=> (
                        <CartItem Key={p.producto.id} cartItem={p} removeItem={removeItem}/>
                      ))
                  }
                  <h2>Valor Total del Carrito: ${total}</h2>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to={"/Checkout"}>Completa tu Compra</Link>
               </div>

          }

        

      </div>
        
                    
          </div>
  );
};

export default Cart;


