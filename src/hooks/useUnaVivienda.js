import { useEffect, useState } from "react";
import { getUnaVivienda } from "../servicios/viviendas/getUnaVivienda";

const useUnaVivienda = (id) =>  {
    
    const [vivienda, setVivienda] = useState([]);
    const [buscando, setBuscando] = useState(true);

    function obtenerUnVivienda() {
        //Marcamos que estamos buscando los datos
        setBuscando(true);
        // Usamos el servicio de obtención de posts que hemos creado
        getUnaVivienda(id).then(vivienda => {
            //Cargamos los post en el estado del componente
            setVivienda(vivienda);
            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);
          });
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerUnVivienda, [id]);
    //El vivienda que devolvemos es el cual cuya id hemos pasado a este hook
    return {buscando, vivienda}
}
export default useUnaVivienda;