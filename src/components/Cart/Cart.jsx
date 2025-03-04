import { useContext } from 'react'
import { CartContext } from '../../Context/CartContex/CartContex'
import React from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import './Cart.css'

export const Cart = () => {

    const { cart, total, cantidadTotal, vaciarCart } = useContext(CartContext);

    if (cantidadTotal === 0) {
        return (
            <div className="cart-empty">
                <h2><strong>No hay productos en el carrito</strong></h2>
                <Link to="/" className="view-products-link"><strong>Ver Productos</strong></Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <div className="cart-items-grid">
                {cart.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            </div>
            <div className="cart-summary">
                <h3 className="cart-total">Total: ${total}</h3>
                <h4 className="cart-quantity">Cantidad Total: {cantidadTotal}</h4>
            </div>
            <div className="cart-actions">
                <button onClick={() => vaciarCart()} className="clear-cart-button">Vaciar el carrito</button>
                <Link to="/checkout" className="checkout-link">Finalizar Compra</Link>
            </div>
        </div>
    );    
}
