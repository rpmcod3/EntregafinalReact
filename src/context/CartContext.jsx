import React, {useState, createContext} from 'react';
export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    const addToCart = (producto,cantidad) => {
        if(!isInCart(producto.id)){
            setCart((prev)=> [...prev,{producto,cantidad}])

        }else{
            console.log("no se puede agregar mas ")
        }

    } 

    const isInCart =() => {
        return cart.some((i)=> i.item.id === itemId)

    }

    const getTotalItems = (item) => {   
        let total = 0;
        cart.forEach((e)=> total += e.cantidad)
        return total

        }
    

    const removeItem = () => {


    }

    const clearCart = () => {

    }

    return (
     <CartContext.Provider value= {
        {
            cart,
            setCart,
            addToCart,
            isInCart,
            getTotalItems,
            removeItem,
            clearCart

        }
     }>

        {children}

        </CartContext.Provider>
    );
};
