import { Route } from "wouter";
import UsuarioPage from "./paginas/UserPage/UsuarioPage";

const App = () => {
  return (
    <>
      <Route path="/dashboard" component={UsuarioPage}></Route>
    </>
  );
};

export default App;
