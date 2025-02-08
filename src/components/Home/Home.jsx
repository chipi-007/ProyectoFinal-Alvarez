import React from 'react'
import { TituloPrincipal } from '../TituloPrincipal/TituloPrincipal'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './Home.css'

export const Home = () => {
  return (
    <div>
        <TituloPrincipal mensaje = "Bienvenido a AtomicVintage" />
        <ItemListContainer texto = "Estos son nuestro productos"/>
    </div>
  )
}
