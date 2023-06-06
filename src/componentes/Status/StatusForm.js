import status from "../../mock-status";
import Status from "./Status";

const StatusForm = (props) => {

    function muestraStatus(status, index) {
        return <Status key={index} index={index} status={status}></Status>;
    }

    return (
        <form className="content-select">
            <select onChange={props.manejarFiltroStatus} size={status.length}>
                {status.map(muestraStatus)}
            </select>
        </form>

    )
}

export default StatusForm;