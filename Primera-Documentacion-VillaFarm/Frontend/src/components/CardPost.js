import React from "react";
import imagen from "./Imagen.jpg";
import './CardPost.css'
import iconimg from './ico-imagen.png'
import iconvideo from './ico-video.png'
import iconevent from './ico-evento.png'

function CardPost() {
  return (
    <div className="card-container-post">
      <div className='card-item-1'>
        <img src={imagen} className="card-item-imagen" />
        <input type="text" placeholder='    Escriba su publicacion'/>
      </div>
      <div className='card-item-2'>
        <div className='card-item-2-items'>
            <img src={iconimg} width='55px'/>
            <p>Foto</p>
        </div>
        <div className='card-item-2-items'>
            <img src={iconvideo} width='50px'/>
            <p>Video</p>
        </div>
        <div className='card-item-2-items'>
            <img src={iconevent} width='50px'/>
            <p>Evento</p>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
