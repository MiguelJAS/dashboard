const CambioPagina = (props) => {

    function cambiarPagina(event) {
        //Si estoy en la primera página y voy hacia atrás o estoy en la última página y voy hacia adelante, no pasa nada. De lo contrario, me cambia de página
        if (!((props.page === 1 && +event.target.value === -1) || (props.page === 42 && +event.target.value === 1))) {
            //Mando a la función manejarPage del padre la página a la que me voy
            props.manejarPage(page => page + +event.target.value);
        }
    }

    return (
            <div className="text-center">
                <p>{props.page} / 42</p>
                <button className="cursor-pointer bg-green-600 text-white text-center no-underline inline-block text-base mb-5 p-3 mx-1 my-px m-3" onClick={cambiarPagina} value={-1}>Página Anterior</button>
                <button className="cursor-pointer bg-green-600 text-white text-center no-underline inline-block text-base mb-5 p-3 mx-1 my-px m-3" onClick={cambiarPagina} value={1}>Siguiente Página</button>
            </div>
    )

}
export default CambioPagina;