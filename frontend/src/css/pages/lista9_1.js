import React from "react";
import "../css/p10.css";
import Logo from "../images/descarga.png";
import Flecha from "../images/flecha2.png";
import Fondo from "../images/img.png";

function  Nueve_1() {
return(
<>
<div className="div50" style={{ background: `url(${Fondo})` }}>
<header>
        <div className="container">
          <div>
            <img className="img" src={Logo} />
          </div>
     <button className="boton"><img className="flecha" src={Flecha} /></button> 
          <nav>
            <a className="text3">9°1</a>
            
          </nav>
        </div>
      </header>
      
      
      <div id="div1" align="center" className="div2">
      <table border="1">
      <tr>
      <td className="td1">#</td>
      <td className="td2" >apellidos</td>
     <td className="td2"> nombre</td>
      </tr>
      <tr>
      <td className="td1">1</td>
      <td className="td1">Acebedo marin</td>
     <td className="td1">Oscar Santiago</td>
      </tr>  
      <tr>
      <td className="td1">2</td>
      <td  className="td1">Beltran Aguirre</td>
     <td className="td1"> Juan Camilo</td>
      </tr>
      <tr>
      <td className="td1">3</td>
      <td className="td1">Cano Ortiz</td>
     <td className="td1"> Vannesa </td>
      </tr>

      <tr>
      <td className="td1">4</td>
      <td className="td2">Franco Ramirez</td>
     <td className="td1"> Maria Paula</td>
      </tr>

      <tr>
      <td className="td1">5</td>
      <td className="td1">Gaviria Lopez</td>
     <td className="td1"> Juan Esteban </td>      </tr>

      <tr>
      <td className="td1">6</td>
      <td className="td1">Guarin Lopez</td>
     <td className="td1">Nikol</td>
      </tr>

      <tr>
      <td className="td1">7</td>
      <td className="td1">Holguín Meza</td>
     <td className="td1"> Andres </td>
     
      </tr>
      <tr>
      <td className="td1">8</td>
      <td className="td1">Lopez Sanchez</td>
     <td className="td1"> Juan Camilo</td>
      </tr>
      <tr>
      <td className="td1">9</td>
      <td className="td1">Osorio Torres</td>
     <td className="td1"> Carlos Andres</td>
     
      </tr>
      <tr>
      <td className="td1">10</td>
      <td className="td1">Zuluaga Florez</td>
    <td className="td1"> Laura Camila </td>
     
      </tr>



      </table>
     


      </div>





      
 </div>


</>

);

}
export  default Nueve_1;