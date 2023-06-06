import '../../FiltroGenero.css';
import { useContext } from "react";
import TipoViviendaContext from "../../contextos/TipoViviendaContext";

const TipoVivienda = (props) => {

    //El contexto recibe los datos del value de la etiqueta option al hacer click sobre él
    const tipovivienda = useContext(TipoViviendaContext);

    if (props.index === 0) {
        return (
            <option onClick={tipovivienda} value={props.tipovivienda} selected={true}>{props.tipovivienda}</option>
        )
    } else {
        return (
            <option onClick={tipovivienda} value={props.tipovivienda}>{props.tipovivienda}</option>
        )
    }

}

export default TipoVivienda;