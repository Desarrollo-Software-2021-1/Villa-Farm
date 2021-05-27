import React from "react";
import iconlike from './ico-like.png'
import iconcom from './ico-comentar.png'
import './CardPublic.css'

function CardPublic(props) {
  return (
    <div className="card-container-public">
      <div className="card-item-1">
        <img src={props.img} className="card-item-imagen" />
        <div>
          <h3>{props.nombre}</h3>
          {/* <p>Agricultor</p> */}
        </div>
      </div>
      <div className='card-item-public-2'>
          <p>{props.texto}</p>
      </div>
      <div className="card-item-public-3">
        <div className="card-item-public-3-items">
          <img src={iconlike} width='20%' height='90%' />
          <p>Recomendar</p>
        </div>
        <div className="card-item-public-3-items">
          <img src={iconcom} width="10%" height='90%'/>
          <p>Comentar</p>
        </div>
      </div>
    </div>
  );
}

export default CardPublic;
