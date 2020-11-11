import React from "react";
import Logo from "../images/descarga.png";
import Fondo from "../images/img.png";
import "../css/styles_p16.css";
import Log from "../images/flecha2.png";
function Rol() {
  return (
    <div className="rol" style={{ background: `url(${Fondo})` }}>
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

      <div className="caja">
        <a href="/celador">
          <button className="Boton27"> Celador </button>
        </a>

        <a href="/coordinador">
          <button className="Boton27"> Coordinador </button>
        </a>
      </div>

      <div>
        <button className="Botonimg">
          {" "}
          <img className="img2" src={Log} />
        </button>
      </div>
    </div>
  );
}

export default Rol;
