import React from "react";
import { deleteUsuario } from "../servicios/deleteUsuario";
import { Link } from "react-router-dom";

const Usuario = ({ id, nombre, apellidos, usuario, email, telefono }) => {
  const handleDelete = () => {
    deleteUsuario(id)
      .then(() => {
        console.log("Usuario eliminado");
      })
      .catch((error) => {
        console.error(error);
      });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <table>
      <tr key={id} className="text-center">
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{id}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{nombre}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {apellidos}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{usuario}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {telefono}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
            <Link to={`/dashboard/users/update/${id}`}>
              <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  {/* Icono de edición */}
                </svg>
                Editar
              </button>
            </Link>
            <button
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-red-500 shadow-sm focus:relative"
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                {/* Icono de eliminación */}
              </svg>
              Eliminar
            </button>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Usuario;
