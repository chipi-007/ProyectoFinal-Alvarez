import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../Asynchornic/Async";
import "./ItemDetalles.css";
import { CartContext } from "../../Context/CartContex/CartContex";
import { useContext } from "react";
import { Contador } from "../Contador/Contador";

const ItemDetalles = () => {

  const {agregarProd } = useContext(CartContext);

  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id: producto.id, title: producto.title, price: producto.price };
    console
    agregarProd(item, cantidad);
  };

  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProduct(id).then((respuesta) => {
      setProducto(respuesta);
      setCargando(false);
    });
  }, [id]);

  if (cargando) return <p className="loading">Cargando...</p>;
  if (!producto) return <p className="error">Error al cargar el producto</p>;

  return (
    <div className="item-detalles">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <p className="price">${producto.price}</p>
      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar Compra </Link>
      ) : (
        <Contador inicial={1} stock={10} funcionAgregar={manejadorCantidad} />
      )}
    </div>
  );
};
 
export default ItemDetalles;
