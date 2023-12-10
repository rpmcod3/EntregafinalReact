import React, { useContext } from 'react';
import { BiCartAlt } from "react-icons/bi";
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    /* const {cantidadTotal} = useContext(CartContext) */
     const {getTotalItems} = useContext(CartContext) 
    
    return (
            <div>
            
            <Link to='/cart'><BiCartAlt/></Link>
            
            {/* <p>{cantidadTotal}</p> */}
            <p>{getTotalItems()}</p> 
            
            </div>
      
    );
};

export default CartWidget;