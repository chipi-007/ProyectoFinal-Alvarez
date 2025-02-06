import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Asynchornic/Async';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);

    useEffect(() => {
        getAllProducts().then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error));
    },[]);
  return (
    <div className = "item-list-container">
        <h2>Todos los productos</h2>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
