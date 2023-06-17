export function deleteUsuario(itemId) {
  return fetch(`http://localhost:8080/api/usuarios/${itemId}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization:
        "$2a$10$l6zOUMqniHIs8DNprvqoQeYEWb2arcecUhknlCrX3.WOSf0FnwmNW",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Puedes retornar una confirmación u otra respuesta si lo deseas
      return response;
    })
    .then(() => {
      console.log("Usuario eliminado");
      // Realiza cualquier acción adicional después de eliminar el usuario
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
      // Maneja el error de acuerdo a tus necesidades
    });
}
