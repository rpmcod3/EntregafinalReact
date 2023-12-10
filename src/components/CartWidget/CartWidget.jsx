import React from 'react';
import { BiCartAlt } from "react-icons/bi";
/* import {CartContext} from '../../context/CartContext'; */

const CartWidget = () => {
    
    return (
            <div>
            <BiCartAlt/>
            <p>0</p>
            </div>
      
    );
};

export default CartWidget;