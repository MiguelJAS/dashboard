const OrdenacionForm = (props) => {

    const valor1 = "A...Z";
    const valor2 = "Z...A";

    return (
        <form className="content-select2">
            <select onChange={props.manejarOrdenacion}>
                <option value={valor1}>{valor1}</option>
                <option value={valor2}>{valor2}</option>
            </select>
        </form>

    )
}

export default OrdenacionForm;