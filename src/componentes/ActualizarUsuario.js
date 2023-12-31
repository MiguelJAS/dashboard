import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIdUser from "../hooks/useIdUser";
import { updateUser } from "../servicios/updateUser";

const ActualizarUsuario = (props) => {
  const { usuario, buscando } = useIdUser(props.params.id);

  console.log(usuario.id);

  const usuarioInicial = {
    id: "",
    nombre: "",
    apellidos: "",
    usuario: "",
    clave: "",
    email: "",
    telefono: "",
  };

  const [initialUser, setUsuario] = useState(usuarioInicial);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(usuario.id, usuario);
    setUsuario(initialUser);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    setUsuario((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          User App
        </h1>

        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="nombre" className="sr-only">
              Nombre
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Nombre"
                id="nombre"
                name="nombre"
                value={usuario.nombre}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="apellidos" className="sr-only">
              Apellidos
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Apellidos"
                id="apellidos"
                name="apellidos"
                value={usuario.apellidos}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="usuario" className="sr-only">
              Usuario
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Usuario"
                id="usuario"
                name="usuario"
                value={usuario.usuario}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="clave" className="sr-only">
              Clave
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Contraseña"
                id="clave"
                name="clave"
                value={usuario.clave}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Email"
                id="email"
                name="email"
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="telefono" className="sr-only">
              Telefono
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Telefono"
                id="telefono"
                name="telefono"
                value={usuario.telefono}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="pb-5">
            <label htmlFor="admin">¿Es administrador?</label>
            <select
              name="admin"
              id="admin"
              value={usuario.admin}
              onChange={handleChange}
            >
              <option value={false}>No</option>
              <option value={true}>Sí</option>
            </select>
          </div>

          <div className="flex justify-between">
            <Link to={`/dashboard/usuarios/`}>
              <button
                type="button"
                className="inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
              >
                Cerrar
              </button>
            </Link>

            <button
              type="submit"
              className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActualizarUsuario;
