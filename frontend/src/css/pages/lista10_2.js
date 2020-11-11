import React from "react";
import "../css/p10.css";
import Logo from "../images/descarga.png";
import Flecha from "../images/flecha2.png";
import Fondo from "../images/img.png";

function Diez_2() {
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
            <a className="text3">10°2</a>
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
              <td className="td1">Alzate Rodriguez</td>
              <td className="td1">Daniel</td>
            </tr>
            <tr>
              <td className="td1">2</td>
              <td className="td1">Aguirre Soto</td>
              <td className="td1"> Kevin</td>
            </tr>
            <tr>
              <td className="td1">3</td>
              <td className="td1">Carvajal Sanchez</td>
              <td className="td1"> Maria Camila </td>
            </tr>

            <tr>
              <td className="td1">4</td>
              <td className="td2">Garcia Estrada</td>
              <td className="td1"> Juan andres </td>
            </tr>

            <tr>
              <td className="td1">5</td>
              <td className="td1">Gaviria Ortiz</td>
              <td className="td1"> Juan Camilo </td>
            </tr>

            <tr>
              <td className="td1">6</td>
              <td className="td1">Gomez Alzate</td>
              <td className="td1">Karen Daniela</td>
            </tr>

            <tr>
              <td className="td1">7</td>
              <td className="td1">Grajales Mejía</td>
              <td className="td1"> Juan Manuel </td>
            </tr>
            <tr>
              <td className="td1">8</td>
              <td className="td1">Jimenez Torres</td>
              <td className="td1"> Natalia</td>
            </tr>
            <tr>
              <td className="td1">9</td>
              <td className="td1">Sanchez Correa</td>
              <td className="td1"> Santiago</td>
            </tr>
            <tr>
              <td className="td1">10</td>
              <td className="td1">Osorio Estrada</td>
              <td className="td1"> Luis Miguel </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
export default Diez_2;
