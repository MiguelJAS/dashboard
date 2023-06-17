import Propiedad from "./Propiedad";
import { Link } from "react-router-dom";

const ListaPropiedades = ({ listaPropiedades }) => {
  return (
    <>
      <div>
        <h1 className="mb-10 mt-10 text-center font-mono text-4xl font-semibold text-teal-600">
          Lista de Propiedades
        </h1>
        <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
          <Link to="/dashboard/usuarios">
            <a
              href="/dashboard/create"
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
            >
              Crear Propiedad
            </a>
          </Link>
        </span>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Provincia
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Municipio
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Precio
                </th>

                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Habitaciones
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Baños
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Superficie
                </th>
                <th className="px-4 py-2" />
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {listaPropiedades.map(
                ({
                  id,
                  provincia,
                  municipio,
                  precio,
                  habitaciones,
                  superficie,
                }) => (
                  <Propiedad
                    key={id}
                    id={id}
                    provincia={provincia}
                    municipio={municipio}
                    precio={precio}
                    habitaciones={habitaciones}
                    superficie={superficie}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListaPropiedades;
