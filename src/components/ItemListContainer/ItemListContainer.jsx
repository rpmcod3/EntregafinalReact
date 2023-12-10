import React,{useState, useEffect}  from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams()

    useEffect(()=>{

        setLoading(true)
        const fetchData = () => {
            
            return fetch("/data/productos.json")
            .then((response) => response.json())
            .then ((data) =>{
                if(categoryId){
                    const filterProducts = data.filter(p=>p.categoria == categoryId)
                    setProducts(filterProducts)
                }else{
                    setProducts(data)
                }
               
            })
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false) );
        };
            setTimeout(() => fetchData(), 2000)
                

            
    }, [categoryId]);

    return (
          
        <>
           {loading ? (

            <h1>...Cargando...</h1>
           ) : (
            <ItemList products={products}/>
           )}
           
        </>
    
    );
};

export default ItemListContainer;


/* return (
          
    <>
       {products.lenght == 0 
       ?
       <h1>Cargando...</h1>
       :
       <ItemList products={products}/>
       }
    </>

); */