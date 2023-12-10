import React, { useContext } from 'react';
import { BiCartAlt } from "react-icons/bi";
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';


const CartWidget = () => {

    const {getTotalItems} = useContext(CartContext)
    
    return (
            <div>
            <BiCartAlt/>
            <p>{getTotalItems()}</p>
            </div>
      
    );
};

export default CartWidget;