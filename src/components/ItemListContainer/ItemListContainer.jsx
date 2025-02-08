import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getCategoryProducts } from '../Asynchornic/Async';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      getCategoryProducts(categoria)
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error));
    } else {
      getAllProducts()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error));
    }
  }, [categoria]);

  return (
    <div className="item-list-container">
      <h2>{categoria ? `Categoría: ${decodeURIComponent(categoria)}` : "Todos los productos"}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
