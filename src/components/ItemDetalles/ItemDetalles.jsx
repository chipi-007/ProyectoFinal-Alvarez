import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../Asynchornic/Async";
import "./ItemDetalles.css"; // Importamos el CSS

const ItemDetalles = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProduct(id).then((respuesta) => {
      setProducto(respuesta);
      setCargando(false);
    });
  }, [id]);

  if (cargando) {
    return <p className="loading">Cargando...</p>;
  }

  if (!producto) {
    return <p className="error">Error al cargar el producto</p>;
  }

  return (
    <div className="item-detalles">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <p className="price">${producto.price}</p>
    </div>
  );
};

export default ItemDetalles;
