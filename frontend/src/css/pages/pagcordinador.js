import React from "react";
import "../css/syles_p5.css";
import Logo from "../images/descarga.png";
import Fondo from  "../images/img.png"
import Campana4 from "../images/campana4.png";
import Puerta from "../images/puerta.png";
function Coordinador () {
 return (
    <>
    <div className="div12"  style={{background: `url(${Fondo})`}}>
      <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            <a></a>
            <a className="text12">Coordinador</a>
          </nav>
        </div>
      </header>
      
      <div className="cuerpo">
      <a    href="/notificacion">
         <button  className="Boton27" href="/notificacion"> <img className="campana" src={Campana4}/>  Notificación  </button>
         </a>
         <br/>  <br/>
         <a href="/subir">
          <button href="#" className="Boton27" >  Subir listas  </button>
         </a> 
          <br/>
          <a href="/faltas">
        <button href="#" className="Boton25" >  Faltas acomuladas  </button>           
        </a>        
        <br/>
        <a href="/">
<button href="#" className="Boton26" > <img className="campana" src={Puerta}/> Salir </button>
      </a>
        </div>
     
     </div>
    </>
  );
}

export default Coordinador;
