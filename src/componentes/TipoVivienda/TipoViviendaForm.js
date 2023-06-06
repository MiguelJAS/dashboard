import tipovivienda from "../../mock-tipovivienda";
import TipoVivienda from "./TipoVivienda";

const TipoViviendaForm = (props) => {

    function muestraTipoVivienda(tipovivienda, index) {
        return <TipoVivienda key={index} index={index} tipovivienda={tipovivienda}></TipoVivienda>;
    }

    return (
        <form className="content-select">
            <select onChange={props.manejarFiltroTipoVivienda} size={tipovivienda.length}>
                {tipovivienda.map(muestraTipoVivienda)}
            </select>
        </form>

    )
}

export default TipoViviendaForm;