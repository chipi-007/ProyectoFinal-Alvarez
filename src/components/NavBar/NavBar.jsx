import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {
  const [categoria, setCategoria] = useState("¿Que estas buscando?");
  useEffect(() => {
    document.title = `${categoria}`  
  },[categoria])

  const manejadorCategorias = (categoria) => {
    setCategoria(categoria);
  }

   return (
    <header>
      <h3>¿Qué estás buscando?</h3>
      <nav>
        <ul>
          <button  onClick={()=>manejadorCategorias("Home")}><Link to="/">Catálogo Completo</Link></button>
          <button onClick={()=>manejadorCategorias("Indumentaria Femenina")}><Link to={`/products/category/${encodeURIComponent("women's clothing")}`}>Indumentaria Femenina</Link></button>
          <button onClick={()=>manejadorCategorias("Indumentaria Masculina")}><Link to={`/products/category/${encodeURIComponent("men's clothing")}`}>Indumentaria Masculina</Link></button>
          <button onClick={()=>manejadorCategorias("Joyeria")}><Link to={`/products/category/${encodeURIComponent("jewelery")}`}>Joyería</Link></button>
          <button onClick={()=>manejadorCategorias("Electronica")}><Link to={`/products/category/${encodeURIComponent("electronics")}`}>Electrónica</Link></button>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

