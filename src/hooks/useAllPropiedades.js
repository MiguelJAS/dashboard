import { useEffect, useState } from "react";
import { getAllPropiedades } from "../servicios/getAllPropiedades";

const useAllPropiedades = () => {
  const [listaPropiedades, setListaPropiedades] = useState([]);
  const [buscando, setBuscando] = useState(true);

  function obtenerPropiedades() {
    //Marcamos que estamos buscando los datos
    setBuscando(true);
    // Usamos el servicio de obtención de posts que hemos creado
    getAllPropiedades().then((propiedades) => {
      //Cargamos los post en el estado del componente
      setListaPropiedades(propiedades);
      //Indicamos que hemos terminado de cargar los datos
      setBuscando(false);
    });
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerPropiedades, []);
  //La lista de viviendas que devolvemos es la cual cuya página hemos pasado a este hook
  return { buscando, listaPropiedades };
};
export default useAllPropiedades;
