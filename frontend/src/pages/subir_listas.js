import React from "react";
import "../css/p5.css";
import Logo from "../images/descarga.png";
import Flecha from "../images/flecha2.png";
import Fondo from "../images/img.png";
import Carpeta from "../images/carpeta6.png";

function Subir() {
  return (
    <>
      <div className="divsito4" style={{ background: `url(${Fondo})` }}>
        <header>
          <div className="container">
            <div>
              <img className="img" src={Logo} />
            </div>
            <nav></nav>
          </div>
        </header>

        <div className="cuerpo">
          <button href="#" className="Boton27">
            {" "}
            <img className="campana" src={Carpeta} /> Subir listas{" "}
          </button>

          <div className="cuerpo">
            <a href="/editarlistas">
              <button href="#" className="Boton27">
                {" "}
                ver y editar listas{" "}
              </button>
            </a>
            <a href="/coordinador">
              <button className="Boton4564">
                {" "}
                <img className="img2" src={Flecha} />
              </button>
            </a>
            <div class="fondo"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subir;
