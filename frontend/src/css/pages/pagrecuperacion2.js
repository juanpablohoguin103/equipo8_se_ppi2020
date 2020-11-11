import React from "react";
import Logo from "../images/descarga.png";
import chulos from "../images/chulos.jpg";
import "../css/styles_p13.css";
import Fondo from  "../images/img.png"

function Recuperar2() {
  return (
    <div className="divsito8" style={{background: `url(${Fondo})`}}>
      <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            
          </nav>
        </div>
      </header>


<div className="div49"> 
<h2>contraseña cambiada exitosamente </h2>
<h4>Su contraseña a sido cambiada exitosamente </h4>

<div> <img className="img46" src={chulos}/> </div>

<a className="Boton49" href="/">
      volver al inicio
    </a>
</div>
</div>





      )}

export default  Recuperar2;
      