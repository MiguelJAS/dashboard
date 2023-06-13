import useAuth from "./componentes/DashBoard/auth/hooks/useAuth";
import UserPage from "./paginas/UserPage/UserPage";
import LoginPage from "./componentes/DashBoard/auth/pages/LoginPage";

const App = () => {
  const { login, handlerLogin, handlerLogOut } = useAuth();

  return (
    <>
      {login && login.isAuth ? (
        <UserPage login={login} handlerLogOut={handlerLogOut} />
      ) : (
        <LoginPage handlerLogin={handlerLogin} />
      )}
    </>
  );
};

export default App;
