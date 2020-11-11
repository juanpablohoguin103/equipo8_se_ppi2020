import React from "react";
import "../css/p9.css";
import Logo from "../images/descarga.png";
import Eye from "../images/eye.png";
import Fondo from "../images/img.png";
import Flecha from "../images/flecha2.png";


function Editar() {
  return (
    <>
      <div className="divsito444" style={{ background: `url(${Fondo})` }}>
        <header>
          <div className="container">
            <div>
              <img className="img" src={Logo} />
            </div>
            <nav>
              <a></a>
              <a className="text"></a>
            </nav>
          </div>
        </header>

        <div  align="center" className="div2">
          <table border="1">
            <tr>
              <td className="td1">11</td>
              <td className="td1">1</td>
              <td className="td1">
                <a href="/once1">
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />
                  </button>
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td className="td1">11</td>
              <td className="td1">2</td>
              <td className="td1">
                {" "}
                <a href="once2">
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />{" "}
                  </button>{" "}
                </a>
              </td>
            </tr>
            <tr>
              <td className="td1">10</td>
              <td className="td1">1</td>
              <td className="td1">
                {" "}
                <a href="diez1">
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />
                  </button>{" "}
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td className="td1">10</td>
              <td className="td1">2</td>
              <td className="td1">
                {" "}
                <a href="/diez2">
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />
                  </button>{" "}
                </a>
              </td>
            </tr>

            <tr>
              <td className="td1">10</td>
              <td className="td1">3</td>
              <td className="td1">
                <a>
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />
                  </button>{" "}
                </a>{" "}
              </td>
            </tr>

            <tr>
              <td className="td1">9</td>
              <td className="td1">1</td>
              <td className="td1">
                {" "}
                <a href="/nueve1">
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />
                  </button>{" "}
                </a>{" "}
              </td>
            </tr>

            <tr>
              <td className="td1">9</td>
              <td className="td1">2</td>
              <td className="td1">
                {" "}
                <a>
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />
                  </button>{" "}
                </a>{" "}
              </td>
            </tr>

            <tr>
              <td className="td1">9</td>
              <td className="td1">3</td>
              <td className="td1">
                {" "}
                <a>
                  {" "}
                  <button className="botonimg">
                    <img className="img2" src={Eye} />
                  </button>{" "}
                </a>{" "}
              </td>
            </tr>
          </table>
                        
        </div>
        

        <a href="/subir">
              <button className="Boton4764">
                {" "}
                <img className="img234" src={Flecha} />
              </button>
            </a>      </div>
    </>
  );
}

export default Editar;
