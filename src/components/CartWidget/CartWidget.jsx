import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../Context/CartContex/CartContex'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)
  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        🛒
        {
          cantidadTotal > 0 && <strong className="cart-count">{cantidadTotal}</strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget
