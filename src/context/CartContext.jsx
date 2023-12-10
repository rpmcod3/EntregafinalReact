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

    const getTotalItems = () => {   
        let cant = 0;
        cart.forEach((e)=> cant += e.cantidad)
        return cant

        }
    

    const removeItem = (id) => {
        const filtrarCarrito = cart.filter ((item)=> item.producto.id !== id )
        setCart(filtrarCarrito)
    }

    const clearCart = () => {
        setCart([])
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
