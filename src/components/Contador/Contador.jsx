import React, { useState } from 'react'

export const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);
  
    const sumarContador = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
    };
  
    const restarContador = () => {
      if (contador > inicial) {
        setContador(contador - 1);
      }
    };
  
    return (
      <>
        <div>
          <button onClick={restarContador}> - </button>
          <strong>{contador}</strong>
          <button onClick={sumarContador}> + </button>
        </div>
        <button onClick={() => funcionAgregar(contador)}> <strong> Agregar al carrito </strong> </button>
      </>
    );
  };
  