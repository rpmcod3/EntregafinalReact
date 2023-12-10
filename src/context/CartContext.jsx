import React, {useState, createContext} from 'react';

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);
    const [total,setTotal] =useState(0);
    const [cantidadTotal,setCantidadTotal]=useState(0);

    const addToCart = (producto,cantidad) => {

        const productoExistente = cart.find(prod => prod.producto.id === producto.id);

        if(!productoExistente) { 
            setCart(prev => [...prev,{producto,cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + producto.precio * cantidad);

        }else{
            const carritoActualizado = cart.map(prod => {
                if (prod.producto.id === producto.id) {
                    return {...prod,cantidad: prod.cantidad+cantidad};
                }else{
                    return prod;
                }
            })

            setCart(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + producto.precio * cantidad)
        }

     /*    if(!isInCart(producto.id)){
            setCart((prev)=> [...prev,{producto,cantidad}])

        }else{
            console.log("no se puede agregar mas ")
        } */

    }; 

    const isInCart =() => {
        return cart.some((i)=> i.item.id === itemId)

    }

    const getTotalItems = () => {   
        let cant = 0;
        cart.forEach((e)=> cant += e.cantidad)
        return cant

        }
    
        const removeItem = (id) => {
            const productoEliminado = cart.find(prod => prod.producto.id === id);
            const carritoActualizado = cart.filter(prod => prod.producto.id !== id);

            setCart(carritoActualizado);

            setCantidadTotal(prev => prev - productoEliminado.cantidad);

            setTotal(prev => prev - productoEliminado.producto.precio * productoEliminado.cantidad);


    /* const removeItem = (id) => {
        const  = cart.filter ((item)=> item.producto.id !== id )
        setCart(filtrarCarrito) */
    
    }

    const clearCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }

        

    return (
     <CartContext.Provider value= {
        {
            cart,
            setCart,
            addToCart,
            isInCart,
            getTotalItems,
            cantidadTotal,
            total,
            removeItem,
            clearCart

        }
     }>

        {children}

        </CartContext.Provider>
    )
}
