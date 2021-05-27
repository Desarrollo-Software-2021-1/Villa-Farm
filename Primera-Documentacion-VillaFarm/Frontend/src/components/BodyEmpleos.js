import React from "react";
import './BodyEmpleos.css'
import { Grid } from "@material-ui/core";
import CardAux from "./CardAux";
import CardEmpleo from "./CardEmpleo";
import CardRecomendaciones from "./empleos/CardRecomendaciones";
import iempresa1 from './empleos/imagenes/empresa1.jpg'
import iempresa2 from './empleos/imagenes/empresa2.jpg'
import iempresa3 from './empleos/imagenes/empresa3.png'
import iempresa4 from './empleos/imagenes/empresa4.png'
import iempresa5 from './empleos/imagenes/empresa5.jpg'

export default function BodyEmpleos() {
  return (
    <Grid container className="color">
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <CardAux />
        <CardEmpleo />
      </Grid>
      <Grid item xs={4}>
        <CardRecomendaciones img={iempresa1} posicion='Asistente contable' empresa='VISION PERU' tiempo='1hora'/>
        <CardRecomendaciones img={iempresa2} posicion='UX Writer' empresa='Casino Atlantic City' tiempo='30 minutos'/>
        <CardRecomendaciones img={iempresa3} posicion='Key Account Manager' empresa='ALD Automotive Perú' tiempo='1 dia '/>
        <CardRecomendaciones img={iempresa4} posicion='Swift Developer – Remote, Full-time' empresa='Toptal'tiempo='13 horas' />
        <CardRecomendaciones img={iempresa5} posicion='Recepcionista' empresa='Air Products Perú' tiempo='11hora'/>
      </Grid>
      <Grid item xs={2}>
        {/* <CardUser /> */}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
