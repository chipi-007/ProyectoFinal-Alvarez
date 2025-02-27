import React from 'react'
import { TituloPrincipal } from '../TituloPrincipal/TituloPrincipal'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './Home.css'

export const Home = () => {
  return (
    <div>
        {/* <TituloPrincipal mensaje = "Bienvenido a AtomicVintage" /> */}
        <TituloPrincipal mensaje = "HOLA PRFES; SIGO TRABAJANDO EN EL PROYECTO, MIL DISCULPAS; ARRANQUE MIS VACACIONES HOY 27/02 Y YA ESTOY TRABAJANDOLO, NUEVAMENTE MIL DISCULPAS, ESPERO TENERLO LO ANTES POSIBLE" />
        <ItemListContainer texto = "Estos son nuestro productos"/>
    </div>
  )
}
