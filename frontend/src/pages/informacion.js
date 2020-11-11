import React from "react";
import Log from "../images/flecha2.png";
import "../css/styles_p15.css"
import Fondo from  "../images/img.png"
function Informacion() {
  return ( 
<div className="divsito6" style={{background: `url(${Fondo})`}} > 
 
<div className="divsito7"> <h1>Contacto de los creadores </h1> 


  
<br/> <br/> <br/> <br/>

<h2>Carlos Daniel Bernal  </h2>
<h2>carlos 2220576@gmail.com</h2>

<br/> <br/>

<h2>Juan Pablo Holguín  </h2>
<h2> Holgincorreaj27@gmail.com </h2>
</div>


<button className="Botonimg">  <img className="img2" src={Log} /></button>



</div>

)}

export default Informacion ;

  