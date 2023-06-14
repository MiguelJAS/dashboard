import { Route } from "wouter";
import UserPage from "./paginas/UserPage/UserPage";

const App = () => {
  return (
    <>
      <Route path="/dashboard" component={UserPage}></Route>
    </>
  );
};

export default App;
