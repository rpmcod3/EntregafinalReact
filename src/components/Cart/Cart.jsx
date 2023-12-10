
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import Item from '../Item/Item';

const Cart = () => {

  const {cart,total, clearCart, removeItem } = useContext(CartContext)  




  return (
    <div>
      <h1>Tu Carrito </h1>

      <div>
        {
           cart.map((p)=>(
            <div key={p.producto.id}>
              <img src={p.producto.img} alt={p.nombre} />
              <h1>{p.producto.nombre}</h1>
              <p>{p.producto.precio}</p>
              <p>{p.producto.stock}</p>
              <p>{p.producto.descripcion}</p>
              <p>{p.cantidad}</p>
              <p>{p.cantidad*p.producto.precio}</p>
              <button onClick={()=>{removeItem(p.producto.id)}}>Eliminar Producto</button>
                            
              </div>
          ))
        }

      </div>
     
      {/* 

      <ul>

 {cart.map((item)=> {
    return <li>
      <Item product={item.producto}/>
      <button onClick={()=> removeItem(item.producto.id)}>Eliminar Producto</button>
    </li>
  })}      

      </ul> */}

      <h2>Valor Total del Carrito: ${total}</h2>
      <button onClick={clearCart}>Vaciar Carrito</button>

      
    </div>
  );
};

export default Cart;


/* import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext"; 

const Cart = () => {

  const {cart,total,clearCart,removeItem} = useContext(CartContext);
console.log(cart)
  
  return (
    <div>

      <h1>TU CARRITO</h1>

      <div>

        {
          cart.map((p)=>(
            <div key={p.producto.id}>
              <img src={p.producto.img} alt={p.nombre} />
              <h1>{p.producto.nombre}</h1>
              <p>{p.producto.precio}</p>
              <p>{p.producto.stock}</p>
              <p>{p.producto.descripcion}</p>
              <p>{p.cantidad}</p>
              <p>{p.cantidad*p.producto.precio}</p>
              <button onClick={()=>{removeItem(p.producto.id)}}>ELIMINAR PRODUCTO</button>
            </div>
          ))
        }

      </div>

      <h2>VALOR TOTAL DEL CARRITO: ${total}</h2>
      <button onClick={()=>{clearCart()}}>LIMPIAR CARRITO</button>
    </div>
  );
}; */


