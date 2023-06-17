import { useEffect, useState } from "react";
import { getIdUser } from "./../servicios/getIdUser";

const useAllUsers = (id) => {
  const [buscando, setBuscando] = useState(true);

  const [usuario, setUsuarioId] = useState([]);

  function obtenerAllUsers() {
    //Marcamos que estamos buscando los datos
    setBuscando(true);
    // Usamos el servicio de obtención de posts que hemos creado
    getIdUser(id).then((usuarios) => {
      //Cargamos los post en el estado del componente
      setUsuarioId(usuarios);
      //Indicamos que hemos terminado de cargar los datos
      setBuscando(false);
    });
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerAllUsers, []);
  //La lista de viviendas que devolvemos es la cual cuya página hemos pasado a este hook
  return { buscando, usuario };
};
export default useAllUsers;
