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
    <>
        <header>
        <h3>{categoria}</h3>
            <nav>
                <ul>
                    <button ><Link to={`/`} > Home </Link></button>
                    <button onClick={()=>manejadorCategorias("Indumentaria Femenina")}> Indumentaria Femenina</button>
                    <button onClick={()=>manejadorCategorias("Indumentaria Masculina")}> Indumentaria Masculina</button>
                    <button onClick={()=>manejadorCategorias("Accesorios")}> Accesorios </button>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    </>
  )
}
