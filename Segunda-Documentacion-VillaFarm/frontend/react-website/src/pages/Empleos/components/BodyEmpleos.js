import React from "react";
import './BodyEmpleos.css'
import { Grid } from "@material-ui/core";
import CardAux from "./CardAux";
import CardEmpleo from "./CardEmpleo";
import CardRecomendaciones from "./CardRecomendaciones";
import iempresa1 from '../../../assets/images/empleos/empresa1.jpg'
import iempresa2 from '../../../assets/images/empleos/empresa2.jpg'
import iempresa3 from '../../../assets/images/empleos/empresa3.png'
import iempresa4 from '../../../assets/images/empleos/empresa4.png'
import iempresa5 from '../../../assets/images/empleos/empresa5.jpg'

export default function BodyEmpleos() {
  return (
    <Grid container className="color">
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <CardAux />
        <CardEmpleo />
      </Grid>
      <Grid item xs={4}>
        <CardRecomendaciones img={iempresa1} posicion='Papa peruana' empresa='4 unidades' tiempo='1hora'/>
        <CardRecomendaciones img={iempresa2} posicion='Queso de cabra' empresa='1 docena' tiempo='30 minutos'/>
        <CardRecomendaciones img={iempresa3} posicion='Leche de granja' empresa='0 unidades' tiempo='1 dia '/>
        <CardRecomendaciones img={iempresa4} posicion='Pan de camote' empresa='1/2 docena'tiempo='13 horas' />
        <CardRecomendaciones img={iempresa5} posicion='Yogurt de durazno' empresa='3 unidades' tiempo='11hora'/>
      </Grid>
      <Grid item xs={2}>
        {/* <CardUser /> */}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
