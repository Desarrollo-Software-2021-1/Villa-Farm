import React from "react";
import { Grid } from "@material-ui/core";
import CardUser from "./CardUser";
import CardPost from "./CardPost";
import './BodyInicio.css'
import CardPublic from "./CardPublic";
import persona1 from './imagenes/persona1.jpg'
import persona2 from './imagenes/persona2.jpg'
import persona3 from './imagenes/persona3.jpg'
import persona4 from './imagenes/persona4.jpg'
import persona5 from './imagenes/persona5.jpeg'
import persona6 from './imagenes/persona6.jpg'

export default function BodyInicio() {
  return (
    <Grid container className='color'>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <CardUser />
      </Grid>
      <Grid item xs={4}>
        <CardPost />
        <CardPublic img={persona1} texto='Me gustaria requerir sus productos' nombre='LUIS PEREZ'/>
        <CardPublic img={persona2} texto='Vendera pollos por cantidad' nombre='JUAN PARREÑO'/>
        <CardPublic img={persona3} texto='Me encanto el producto 'nombre='SOFIA QUISPE'/>
        <CardPublic img={persona4} texto='Aqui se vende la mejor carne'nombre='LUIS DE LA ROSA'/>
        <CardPublic img={persona5} texto='100% RECOMENDADO VILLAFARM'nombre='VERONICA MENDOZA'/>
        <CardPublic img={persona6} texto='El mejor lugar para comprar sus alimentos 100% granja'nombre='LUIS PARREÑO'/>
      </Grid>
      <Grid item xs={2}>
       
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
