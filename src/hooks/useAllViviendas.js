import { useEffect, useState } from "react";
import { getAllViviendas } from "../servicios/viviendas/getAllViviendas";

const useAllViviendas = (page) =>  {

    const [listaViviendas, setListaViviendas] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerAllViviendas() {
        //Marcamos que estamos buscando los datos
        setBuscando(true);
        // Usamos el servicio de obtención de posts que hemos creado
        getAllViviendas(page).then(viviendas => {
            //Cargamos los post en el estado del componente
            setListaViviendas(viviendas);
            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);
          });
    }
  
    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerAllViviendas, [page]);
    //La lista de viviendas que devolvemos es la cual cuya página hemos pasado a este hook
    return {buscando, listaViviendas}
}
export default useAllViviendas;