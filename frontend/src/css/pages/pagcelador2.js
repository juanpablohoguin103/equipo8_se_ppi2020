import React from "react";
import "../css/styles_p4.css";
import Fondo from "../images/img.png";

function Celador2() {
  return (
    <div className="div55" style={{ background: `url(${Fondo})` }}>
      <div className="seleccion">
        <div className="desplegable">
          <label htmlFor="seleccione"> </label>
          <select
            className="lista2"
            name="seleccione"
            id="seleccione"
            type="text"
          >
            <option value="">seleccione grado </option>
            <option value=""> 11º</option>
            <option value=""> 10º </option>
            <option value=""> 9º </option>
            <option value=""> 8º </option>
            <option value=""> 7º </option>
            <option value=""> 10º </option>
          </select>

          <div>
            <label htmlFor="seleccione"> </label>
            <select
              className="lista1"
              name="seleccione"
              id="seleccione"
              type="text"
            >
              <option value=""> seleccione grupo </option>
              <option value=""> 1 </option>
              <option value=""> 2 </option>
              <option value=""> 3 </option>
              <option value=""> 4 </option>
              <option value=""> 5 </option>
            </select>
          </div>
        </div>

        <div>
          <a className="boton4" href="/listas">
            Entrar
          </a>
        </div>
      </div>
    </div>
  );
}
export default Celador2;
