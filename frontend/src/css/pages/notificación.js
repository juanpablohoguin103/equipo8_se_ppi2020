import React from "react";
import Logo from "../images/descarga.png";
import punto from "../images/puntonegro.png";
import Log from "../images/flecha2.png";
import "../css/styles_p14.css";
import Fondo from "../images/img.png";

function Notificacion() {
  return (
    <div className="div45" style={{ background: `url(${Fondo})` }}>
      <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <nav>
            <h1 className="text63">Notificaciones </h1>
          </nav>
        </div>
      </header>

      <div className="div61">
        <img className="punto1" src={punto} />
        <h2 className="text62">
          La estudiante ACUÑA LOPEZ KAROL JULIANA del grado 10°2 llego tarde el
          10/02/20{" "}
        </h2>
        <br />
        <img className="punto1" src={punto} />
        <h2 className="text62">
          La estudiante DELGADO CONTRERAS ANA del grado 10°2 llego tarde el
          13/02/20{" "}
        </h2>
        <br />
        <img className="punto1" src={punto} />
        <h2 className="text62">
          El estudiante BUITRAGO LOZANO DANIEL del grado 10°2 llego tarde el
          20/02/20{" "}
        </h2>
        <br />
        <img className="punto1" src={punto} />
        <h2 className="text65">
          El estudiante HERNANDEZ RIVERA EDGAR del grado 10°2 llego tarde el
          23/02/20{" "}
        </h2>
      </div>

      <a href="/coordinador">
        <button className="Boton434">
          {" "}
          <img className="img2" src={Log} />
        </button>
      </a>
    </div>
  );
}

export default Notificacion;
