import React from "react";
import "../css/styles_p2.css";
import Fondo from  "../images/img.png"

function  Login(){
  return (
<div style={{background: `url(${Fondo})`}}>
 <div className="Titulo">
      <h1>Registrate </h1>
      
      
    </div>


  <div className="Formulario"> 
<div className="contenedor">
<label className="campoentrada"  htmlFor="name">  </label>
<input name="name" id="name"type="text" placeholder="Nombre:"/> 

<label  className="campoentrada" htmlFor="surname">   </label>
<input name="surname" id="surname"type="text" placeholder="Apellido:"/> 

<label className="campoentrada" htmlFor="Email">  </label>
<input name="Email" id="Email"type="Email" placeholder="Email:"/>
<label className="campoentrada" htmlFor="pasword">   </label>
<input name="pasword" id="pasword"type="password" placeholder="Contraseña:"/> 

<label className="campoentrada" htmlFor="confirm pasword" > </label>
<input name="confirm pasword" id="confirm pasword"type="password" placeholder="Confirmar contraseña:"/> 


<label  htmlFor="seleccione" > </label>
<select className="campoentrada" name="seleccione" id="seleccione"type="text">

<option value="">  </option>
<option  disabled="selecione rol" > seleccione rol </option>
<option value=""> Coordinador (a) </option>
<option value=""> Celador (a) </option>

   </select>
   </div>

  </div>
 <a className="Boton2" href="/sing_up">
      Registrese 
    </a>




</div>

 
  )
 }
 
 
 export default Login ;