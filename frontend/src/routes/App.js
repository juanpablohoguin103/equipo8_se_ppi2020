import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Sing_up from "../pages/Sing_up";
import Coordinador from "../pages/pagcordinador";
import Celador from "../pages/pagcelador";
import Celador2 from "../pages/pagcelador2";
import Listas from "../pages/pagcelador3";
import Recuperar from "../pages/pagrecuperacion";
import Listas1 from "../pages/paglistasacomuladas";
import Editar from "../pages/editar_listas";
import Diez_1 from "../pages/lista10_1";
import Diez_2 from "../pages/lista10_2";
import Once_1 from "../pages/lista11_1";
import Once_2 from "../pages/lista11_2";
import Nueve_1 from "../pages/lista9_1";
import Subir from "../pages/subir_listas";
import Enviar from "../pages/notificación_enviada";
import Informacion from "../pages/informacion";
import Recuperar2 from "../pages/pagrecuperacion2";
import Notificaciones from "../pages/notificación";
import Rol from "../pages/pag_rol";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/sing_up" component={Sing_up} />
          <Route exact path="/contactos" component={Informacion} />
          <Route exact path="/celador" component={Celador} />
          <Route exact path="/coordinador" component={Coordinador} />
          <Route exact path="/recuperar" component={Recuperar} />
          <Route exact path="/recuperar2" component={Recuperar2} />
          <Route exact path="/notificacion" component={Notificaciones} />
          <Route exact path="/rol" component={Rol} />
          <Route exact path="/celador_g" component={Celador2} />
          <Route exact path="/listas" component={Listas} />
          <Route exact path="/notificacion_enviada" component={Enviar} />
          <Route exact path="/subir" component={Subir} />
          <Route exact path="/faltas" component={Listas1} />
          <Route exact path="/editarlistas" component={Editar} />
          <Route exact path="/once1" component={Once_1} />
          <Route exact path="/once2" component={Once_2} />
          <Route exact path="/diez1" component={Diez_1} />
          <Route exact path="/diez2" component={Diez_2} />
          <Route exact path="/nueve1" component={Nueve_1} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
