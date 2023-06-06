import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const RegisterForm = ({
  handlerAddUser,
  userUpdate,
  initialUserRegister,
  handleCloseForm,
}) => {
  const [registerForm, setRegisterForm] = useState(initialUserRegister);

  //Desestructuramos el estado
  const { id, firstName, surname, email, password } = registerForm;

  useEffect(() => {
    setRegisterForm({
      ...userUpdate,
      password: "",
    });
  }, [userUpdate]);

  function handleOnChange({ target }) {
    //Desectruturamos target
    const { name, value } = target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!firstName || (!password && id === 0) || !email || !surname) {
      Swal.fire(
        "Error de validación",
        "Debe completar los campos de formulario",
        "error"
      );

      return;
    }

    //Limpiamos el formulario
    handlerAddUser(registerForm);
    setRegisterForm(initialUserRegister);
  }

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            User App
          </h1>

          <form
            action
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Nombre"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Surname
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Apellidos"
                  id="surname"
                  name="surname"
                  value={surname}
                  onChange={handleOnChange}
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
                  value={email}
                  onChange={handleOnChange}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {id > 0 ? (
              ""
            ) : (
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              onClick={handleSubmit}
            >
              {id > 0 ? "Editar" : "Crear"}
            </button>
            <button
              type="button"
              className="ml-3 inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white "
              onClick={handleCloseForm}
            >
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
