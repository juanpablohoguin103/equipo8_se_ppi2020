import React from "react";
import Logo from "../images/descarga.png";
import chulos from "../images/chulos.jpg";
import "../css/styles_p12.css";
import Fondo from "../images/img.png";
function Enviar() {
  return (
    <div className="Enviar" style={{ background: `url(${Fondo})` }}>
      <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            <a></a>
          </nav>
        </div>
      </header>

      <div className="div48">
        <h2 className="text79">
          {" "}
          Las notificaciones han sido enviadas correctamente{" "}
        </h2>
        <div>
          {" "}
          <img className="img46" src={chulos} />{" "}
        </div>
      </div>

      <a className="Boton45" href="/celador">
        Ir al menu
      </a>
    </div>
  );
}

export default Enviar;
