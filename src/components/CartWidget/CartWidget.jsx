import React, { useContext } from 'react';
import { BiCartAlt } from "react-icons/bi";
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const {getTotalItems} = useContext(CartContext)
    
    return (
            <div>
            
            <Link to='/cart'><BiCartAlt/></Link>
            
            <p>{getTotalItems()}</p>
            
            </div>
      
    );
};

export default CartWidget;