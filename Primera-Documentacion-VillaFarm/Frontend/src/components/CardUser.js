import React from "react";
import imagen from "./Imagen.jpg";
import "./CardUser.css";

function CardUser() {
  return (
    <div className="card-container">
      <img src={imagen} className="card-item-imagen" />
      <div>
        <h2>JOSE PEDRO CASTILLO TERRONES</h2>
        <p>Agricultor</p>
        <h3>Lugar de nacimiento:</h3><h4> Chota - Cajamarca</h4>
        <h3>Educacion:</h3><h4> Instituto Superior Pedagógico Público "Octavio Matta Contreras", Universidad César Vallejo</h4>
      </div>
    </div>
  );
}

export default CardUser;
