import genero from "../../mock-genero";
import Genero from "./Genero";

const GeneroForm = (props) => {

    function muestraGeneros(genero, index) {
        return <Genero key={index} index={index} genero={genero}></Genero>;
    }

    return (
        <form className="content-select">
            <select onChange={props.manejarFiltroGenero} size={genero.length}>
                {genero.map(muestraGeneros)}
            </select>
        </form>

    )
}

export default GeneroForm;