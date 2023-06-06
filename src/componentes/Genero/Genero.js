import { useContext } from "react";
import GeneroContext from "../../contextos/GeneroContext";

const Genero = (props) => {

    //El contexto recibe los datos del value de la etiqueta option al hacer click sobre él
    const genero = useContext(GeneroContext);
    
    if (props.index === 0) {
        return (
            <option onClick={genero} value={props.genero} selected={true}>{props.genero}</option>
        )
    } else {
        return (
            <option onClick={genero} value={props.genero}>{props.genero}</option>
        )
    }

}

export default Genero;