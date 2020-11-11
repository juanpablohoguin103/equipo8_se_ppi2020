import React from "react";
import "../css/celador.css";
import Logo from "../images/descarga.png";
import Fondo from  "../images/img.png"
import Puerta from "../images/puerta.png";
import Usuario from "../images/usuario.png";

function Celador() {
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
            <a className="text46">Celador</a>
          </nav>
        </div>
      </header>
      
        <div className="cuerpo">
          < a href="celador_g">
          <button className="Boton23" href="/celador_g"> 
          <img className="campana" src={Usuario}/> Grupos y  grados
          </button>
          </a>
          <div className="cuerpo">
          <a href="/">
          <button className="Boton24" >
          <img className="campana" src={Puerta}/>   Salida 
          </button>
          </a>
        </div>
        
        </div>
     
     </div>
    </>
  );
}

export default Celador;
