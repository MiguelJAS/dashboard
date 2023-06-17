export function getAllUsuarios() {
  //Se recibirán datos con el fetch dependiendo de la página en la que nos encontremos. Esta página es dada por el hook useAllViviendas
  return fetch(`http://localhost:8080/api/usuarios`).then((response) => {
    const data = response.json();
    return data;
  });
}
