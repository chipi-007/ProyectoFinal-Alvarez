import React from 'react'
import { TituloPrincipal } from './components/TituloPrincipal/TituloPrincipal';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {


  return (
    <>
      <TituloPrincipal mensaje = "Bienvenido a AtomicVintage" />
      <NavBar/>
      <ItemListContainer texto = "Estos son nuestro productos"/>
    </>
  )
}

export default App