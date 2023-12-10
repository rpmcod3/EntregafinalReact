import { Button } from 'bootstrap';
import React, {useState} from 'react';

const ItemCount = ({initial,stock,onAdd}) => {

    const [count,setCount] = useState(initial)

    const increment = () => {
        if(count<stock){
            setCount(count+1)
        }
    }
    const decrement = () => {
        if(count>initial){
            setCount(count-1)
        }
    }

    const addToCart = () => {
        onAdd(count)
    }
    
    return (
        <div>
            
            <button className="button" onClick={increment}>Incrementar</button>
            <span>{count}</span>
            <button className="button" onClick={decrement}>Decrementar</button>
            <button className="button" onClick={()=>{onAdd(count)}} disable={!stock}>
                Agregar al carrito</button>
        </div>
        
    );
};
export default ItemCount;