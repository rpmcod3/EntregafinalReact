
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";
import CartWidget from '../CartWidget/CartWidget';




const Navbar = () => {

  const enlaces = [
    
    "espectaculos",
    "abstract",
    "eventos",
    "carnaval",
    "moda",
    "contacto",
  

  ]

return (
    <div>
      <Link to={"/"}>
      <h1>Fotogalería</h1>
      </Link>
      
      <ul>

          {enlaces.map((e,id)=>
          <li key={id}>
            <Link to={`${e}`}>
            {e}
            </Link>
            
          </li>

          )}     
            
     </ul> 
     
     <CartWidget/>
            

    </div>
  );
};

export default Navbar;

