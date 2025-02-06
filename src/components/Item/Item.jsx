import React from 'react';
import './Item.css'

const Item = ({ id, title, price, image }) => {
  return (
    <div className='item'>
        <img src={image} alt={title} width={100} />
        <h4>Nombre: {title}</h4>
        <p>Precio: ${price}</p>
        <p>ID: {id}</p>
        <button>Ver Detalles</button>
    </div>
  );
};

export default Item;
