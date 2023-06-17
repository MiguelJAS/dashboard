import { Route } from "wouter";
// import AgregarPaciente from "./paginas/Usuario/AgregarUsuario";
import CrearUsuario from "./componentes/CrearUsuario"
import ActualizarUsuario from "./componentes/ActualizarUsuario"
import Usuarios from "./paginas/Usuarios";
import Propiedades from "./paginas/Propiedades"
import ActualizarPropiedad from "./componentes/ActualizarPropiedad"
import CrearPropiedad from "./componentes/CrearPropiedad"
const App = () => {


  return (
    <>
        <Route path="/dashboard/usuarios" component={Usuarios}></Route>
        <Route path="/dashboard/users/create" component={CrearUsuario}></Route>
        <Route path="/dashboard/users/update/:id" component={ActualizarUsuario}></Route>


        <Route path="/dashboard/propiedades" component={Propiedades}></Route>
        <Route path="/dashboard/propiedades/create" component={CrearPropiedad}></Route>
        <Route path="/dashboard/propiedades/update/:id" component={ActualizarPropiedad}></Route>

    </>
  );
};

export default App;
