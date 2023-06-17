export function updateUser(id, newData) {
  return fetch(`http://localhost:8080/api/usuarios/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      // Authorization:
      //   "$2a$10$l6zOUMqniHIs8DNprvqoQeYEWb2arcecUhknlCrX3.WOSf0FnwmNW",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Puedes retornar una confirmación u otra respuesta si lo deseas
      return response;
    })
    .then(() => {
      console.log("Usuario actualizado");
      // Realiza cualquier acción adicional después de actualizar el usuario
    })
    .catch((error) => {
      console.error("Error al actualizar el usuario:", error);
      // Maneja el error de acuerdo a tus necesidades
    });
}
