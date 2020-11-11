import React from "react";
import "../css/p10.css";
import Logo from "../images/descarga.png";
import Flecha from "../images/flecha2.png";
import Fondo from "../images/img.png";

function Diez_1() {
  return (
    <>
    <div className="div50" style={{ background: `url(${Fondo})` }}>
      <header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
          <a href="editarlistas">
            <button className="boton">
              <img className="flecha" src={Flecha} />
            </button>
          </a>
          <nav>
            <a className="text3">10°1</a>
          </nav>
        </div>
      </header>
     
        <div id="div1" align="center" className="div2">
          <table border="1">
            <tr>
              <td className="td1">#</td>
              <td className="td2">apellidos</td>
              <td className="td2"> nombre</td>
            </tr>
            <tr>
              <td className="td1">1</td>
              <td className="td1">Amariles Perez</td>
              <td className="td1">Andrea</td>
            </tr>
            <tr>
              <td className="td1">2</td>
              <td className="td1">Bustamante Torres</td>
              <td className="td1"> Juan Camilo</td>
            </tr>
            <tr>
              <td className="td1">3</td>
              <td className="td1">Correa Mendez</td>
              <td className="td1"> Vannesa </td>
            </tr>

            <tr>
              <td className="td1">4</td>
              <td className="td2">Florez Ramirez</td>
              <td className="td1"> Manuel Jesus</td>
            </tr>

            <tr>
              <td className="td1">5</td>
              <td className="td1">Gaviria Lopez</td>
              <td className="td1"> Juan Jose </td>
            </tr>

            <tr>
              <td className="td1">6</td>
              <td className="td1">Guarin Lopez</td>
              <td className="td1">Juan Carlos</td>
            </tr>

            <tr>
              <td className="td1">7</td>
              <td className="td1">Hernadez Meza</td>
              <td className="td1"> Maria Jose </td>
            </tr>
            <tr>
              <td className="td1">8</td>
              <td className="td1">Leon Sanchez</td>
              <td className="td1"> Anguie Camila</td>
            </tr>
            <tr>
              <td className="td1">9</td>
              <td className="td1">Otalvaro Soto</td>
              <td className="td1"> Carlos Andres</td>
            </tr>
            <tr>
              <td className="td1">10</td>
              <td className="td1">Zapata Torres</td>
              <td className="td1"> Maria Paula </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default Diez_1;
