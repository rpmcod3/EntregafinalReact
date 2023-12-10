import React, {useState,useEffect,useContext} from 'react';
import { collection,addDoc,updateDoc,doc,getDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {


    const [nombre,setNombre] = useState ("");
    const [apellido,setApellido] = useState ("");
    const [telefono,setTelefono] = useState ("");
    const [email,setEmail] = useState ("");
    const [emailConfirmacion,setEmailConfirmacion] = useState ("");
    const [error,setError] = useState ("");
    const [ordenId,setordenId] = useState ("");

        const {cart,total,cantidadTotal,clearCart} = useContext(CartContext)

        const manejadorFormulario = (event) => {

            event.preventDefault()


            if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
                setError("Por favor completa los campos")
                return;
            }

            if(email !== emailConfirmacion){
                setError ("El email no coincide")
                return;
            }

            const db = getFirestore()

            const orden = {
                items: cart.map((producto) => ({
                    id: producto.producto.id,
                    nombre: producto.producto.nombre, 
                    cantidad: producto.cantidad

                    })),
                    total: total,
                    fecha: new Date(),
                    nombre,
                    apellido,
                    telefono,
                    email

            }

            Promise.all(
                    orden.items.map(async (productoOrden) => {
                        const prouctoRef = doc (db,"productos",productoOrden)
                        const productoDoc = await getDoc (productoRef)
                        const StockActual = productoDoc.data().stock 
                        await updateDoc(productoRef, {
                            stock: stockActual - productoOrden.cantidad
                        })


                    })
            )
            .then (() => { 
                addDoc(collection(db,"ordenes"),orden)
                .then((docRef) => {
                    setordenId(docRef.id);
                    clearCart()

                })
                .catch((error) => {
                    setError("Error al crear la orden")
                })
            })
              .catch((error)=>{
                setError("No pudimos actualizar el Stock, intentelo luego")

              })  
            
        }

    return (
        <div>
           <h2> Ingresa tus datos </h2>



         {
            cart.map ((producto)=> {
                <div key={producto.producto.id}>
                    <p>
                        {producto.producto.nombre} x {producto.cantidad}
                    </p>
                    <p>{producto.producto.precio}</p>

                    </div>
            })
         }   
                
            <form onSubmit={manejadorFormulario}>

            <div>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={(e)=> setNombre(e.target.value)}/>

        </div>

        <div>

        <label htmlFor="">Apellido</label>
            <input type="text" onChange={(e)=> setApellido(e.target.value)}/>

        </div>
        <div>

        <label htmlFor="">Telefono</label>
            <input type="number" onChange={(e)=> setTelefono(e.target.value)}/>

        </div>
        <div>

        <label htmlFor="">Email</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)}/>

        </div>
        <div>

        <label htmlFor="">Email de confirmacion</label>
            <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>

        </div>

        {error && <p style={{color: 'orangered'}}>{error}</p> }

            <button type='submit'>Comprar</button>



            {
                ordenId && ( 
                    <p>
                            Gracias por tu compra! Tu numero  de ID es: {ordenId}

                    </p>
                )
            };

            </form>



        


        </div>
    );
};

export default Checkout;