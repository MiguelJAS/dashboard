import "../../App.css";
import useUsers from "../../hooks/useUsers";
import BotonCrearUsuario from "../../componentes/Botones/BotonCrearUsuario";
import NavBar from "../../componentes/NavBar/NavBar";
import useAllUsers from "../../hooks/useAllUsers";
import UsuarioForm from "../../componentes/UsuarioForm/UsuarioForm";
import ListaUsuarios from "../../componentes/ListaUsuarios/ListaUsuarios";

const UsuarioPage = ({ handlerLogOut, login }) => {
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

  const { listaUsuarios, buscando } = useAllUsers();

  return (
    <>
      {visibleForm ? (
        <div className="abrir-modal animacion fadeIn">
          <div className="modal" tabIndex={-1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <UsuarioForm
                    handlerAddUser={handlerAddUser}
                    initialUserRegister={initialUserRegister}
                    userUpdate={userUpdate}
                    handleCloseForm={handleCloseForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex columns-2">
          <NavBar handlerLogOut={handlerLogOut} login={login} />
          {!visibleForm ? (
            <div className="md:container md:mx-auto">
              <div className="">
                {users.length === 0 ? (
                  <div
                    className="mt-36 flex items-center justify-center border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
                    role="alert"
                  >
                    {/* Por hacer!!!!!!!!! */}
                    <div className="pr-10">
                      <BotonCrearUsuario handleOpenForm={handleOpenForm} />
                    </div>
                    <p>No hay usuarios en el sistema!</p>
                  </div>
                ) : (
                  <ListaUsuarios
                    users={users}
                    handlerRemoveUser={handlerRemoveUser}
                    handleUpdateUser={handleUpdateUser}
                    handleOpenForm={handleOpenForm}
                    listaUsuarios={listaUsuarios}
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default UsuarioPage;
