import { useReducer, useState } from "react";
import usersReducer from "../componentes/DashBoard/reducers/usersReducer";
import Swal from "sweetalert2";

const useUsers = () => {
  const initialUserList = [
    {
      id: 1,
      firstName: "Sergio",
      surname: "Marcilla",
      email: "maricllafa@hotmail.com",
      password: "123",
    },
  ];

  const initialUserRegister = {
    id: 0,
    firstName: "",
    surname: "",
    email: "",
    password: "",
  };

  const [users, dispatch] = useReducer(usersReducer, initialUserList);

  const [userUpdate, setUserUpdate] = useState(initialUserRegister);

  const [visibleForm, setVisibleForm] = useState(false);

  function handlerAddUser(user) {
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user,
    });
    Swal.fire(
      user.id === 0 ? "Usuario Creado!" : "Usuario Actualizado!",
      user.id === 0
        ? "El usuario ha sido creado con exito!"
        : "El usuario ha sido actualizado con exito!",
      "success"
    );
    handleCloseForm();
  }

  function handlerRemoveUser(id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "El usuario será elinminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, elminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id,
        });
        Swal.fire(
          "Usuario Eliminado!",
          "El usuario ha sido eliminado!",
          "success"
        );
      }
    });
  }

  function handleUpdateUser(user) {
    setVisibleForm(true);
    setUserUpdate({ ...user });
  }

  function handleOpenForm() {
    setVisibleForm(true);
  }

  function handleCloseForm() {
    setVisibleForm(false);
    setUserUpdate(initialUserRegister);
  }

  return {
    users,
    userUpdate,
    initialUserRegister,
    visibleForm,

    handleUpdateUser,
    handlerAddUser,
    handlerRemoveUser,
    handleOpenForm,
    handleCloseForm,
  };
};

export default useUsers;
