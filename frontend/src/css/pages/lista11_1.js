import React from "react";
import "../css/p10.css";
import Logo from "../images/descarga.png";
import Flecha from "../images/flecha2.png";
import Fondo from "../images/img.png";

function Once_1() {
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
              <a className="text3">11°1</a>
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
              <td className="td1">Alzate Perez</td>
              <td className="td1">Oscar Adrian</td>
            </tr>
            <tr>
              <td className="td1">2</td>
              <td className="td1">Buitrago Mendoza</td>
              <td className="td1"> Maria Camila</td>
            </tr>
            <tr>
              <td className="td1">3</td>
              <td className="td1">Cordoba Osorio</td>
              <td className="td1"> Paulina </td>
            </tr>

            <tr>
              <td className="td1">4</td>
              <td className="td2">Garcia Estrada</td>
              <td className="td1"> Juan andres </td>
            </tr>

            <tr>
              <td className="td1">5</td>
              <td className="td1">Gaviria Lopez</td>
              <td className="td1"> Juan Jose </td>
            </tr>

            <tr>
              <td className="td1">6</td>
              <td className="td1">Grajales Meza</td>
              <td className="td1">Monica </td>
            </tr>

            <tr>
              <td className="td1">7</td>
              <td className="td1">Henao Patiño</td>
              <td className="td1"> Yeison </td>
            </tr>
            <tr>
              <td className="td1">8</td>
              <td className="td1">Jaramillo Torres</td>
              <td className="td1"> Carlos Andres </td>
            </tr>
            <tr>
              <td className="td1">9</td>
              <td className="td1">Marquez Sanchez</td>
              <td className="td1"> Manuela </td>
            </tr>
            <tr>
              <td className="td1">10</td>
              <td className="td1">Sanchez Perez</td>
              <td className="td1"> Juan David </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default Once_1;
