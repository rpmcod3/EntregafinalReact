import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {
   
   const [quantity,setQuantity]=useState(0)
    const onAdd = (cantidad) => {
       
        setQuantity(cantidad)
        alert(cantidad)
    }

   
   
    return (
        <div className="detalles">
            <img src={producto.img} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Precio: {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Descripcion: {producto.descripcion}</p>
            {quantity == 0 ? 
           
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            :

            <Link to={"/Cart"}>Ir al Carrito</Link>
            }
            
        </div>
    );
};

export default ItemDetail;