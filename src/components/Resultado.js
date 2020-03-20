import React from "react";

const Resultado = ({ total, plazo, cantidad }) => {
  return (
    <div className="u-full-width result">
      <h2>Resumen</h2>
      <p>La cantidad solicitada es: $ {cantidad}</p>
      <p>A pagar en {plazo} meses</p>
      <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
      <p>Total a pagar en: $ {total.toFixed(2)}</p>
    </div>
  );
};

export default Resultado;
