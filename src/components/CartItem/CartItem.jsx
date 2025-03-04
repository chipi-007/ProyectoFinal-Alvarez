import { useContext } from "react";
import { CartContext } from "../../Context/CartContex/CartContex";
import React from 'react'
import './CartItem.css'

export const CartItem = ({ item, cantidad }) => {
    const { eliminarProd } = useContext(CartContext);

    return (
        <div className="cart-item-container">
            <h4 className="cart-item-title">{item.title}</h4>
            <p className="cart-item-detail">Cantidad: {cantidad}</p>
            <p className="cart-item-detail">Precio: ${item.price}</p>
            <button className="remove-item-button" onClick={() => eliminarProd(item.id)}>Eliminar Producto</button>
        </div>
    )
}
