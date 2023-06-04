import "./App.css";
import UserList from "./componentes/DashBoard/UserList/UserList";
import RegisterForm from "./componentes/RegisterForm/RegisterForm";
import Menu from "./componentes/DashBoard/Menu/Menu";
import useUsers from "./hooks/useUsers";

const App = () => {
  const {
    users,
    userUpdate,
    initialUserRegister,
    visibleForm,
    handleUpdateUser,
    handlerAddUser,
    handlerRemoveUser,
    handleOpenForm,
    handleCloseForm,
  } = useUsers();

  return (
    <>
      <div className="flex columns-2">
        <Menu></Menu>
        <div className="md:container md:mx-auto">
          <div className="">
            {users.length === 0 ? (
              <div
                className="mt-36 flex items-center justify-center border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
                role="alert"
              >
                <p>No hay usuarios en el sistema!</p>
              </div>
            ) : (
              <UserList
                users={users}
                handlerRemoveUser={handlerRemoveUser}
                handleUpdateUser={handleUpdateUser}
                handleOpenForm={handleOpenForm}
              />
            )}
          </div>
        </div>
      </div>

      {!visibleForm || (
        <div className="mt-48">
          <RegisterForm
            handlerAddUser={handlerAddUser}
            initialUserRegister={initialUserRegister}
            userUpdate={userUpdate}
            handleCloseForm={handleCloseForm}
          />
        </div>
      )}
    </>
  );
};

export default App;
