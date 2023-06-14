import BotonCrearUsuario from "../Botones/BotonCrearUsuario";
import Usuario from "../Usuario/Usuario";

const ListaUsuarios = ({
  listaUsuarios,
  handlerRemoveUser,
  handleUpdateUser,
  handleOpenForm,
}) => {
  return (
    <>
      <h1 className="mb-10 mt-10 text-center font-mono text-4xl font-semibold text-indigo-600">
        Lista de Usuarios
      </h1>
      <BotonCrearUsuario handleOpenForm={handleOpenForm} />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Nombre
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Apellidos
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Usuario
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="px-4 py-2" />
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {listaUsuarios.map(
              ({ id, nombre, apellidos, usuario, email, telefono }) => (
                <Usuario
                  key={id}
                  id={id}
                  nombre={nombre}
                  apellidos={apellidos}
                  email={email}
                  usuario={usuario}
                  telefono={telefono}
                  handlerRemoveUser={handlerRemoveUser}
                  handleUpdateUser={handleUpdateUser}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListaUsuarios;
