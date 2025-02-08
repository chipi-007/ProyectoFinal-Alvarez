import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, image }) => {
  return (
    <div className='item'>
        <img src={image} alt={title} width={100} />
        <h4>{title}</h4>
        <p>Precio: ${price}</p>
        <p>ID: {id}</p>
        <button><Link to={`/producto/${id}`} > Ver Detalles </Link></button>
    </div>
  );
};

export default Item;
