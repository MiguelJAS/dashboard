import '../../App.css';
import AjaxLoader from '../../componentes/Ajax-Loader/AjaxLoader';
import useUnaVivienda from '../../hooks/useUnaVivienda';
import ViviendaCompleta from '../../componentes/ViviendaCompleta/ViviendaCompleta';


function ViviendaDetallada(props) {

    //La vivienda recibida en este componente es la vivienda de una id específica. Esta id es recogida de la url y pasada al hook useUnaVivienda, que a su vez devuelve la vivienda de dicha id.
    const { buscando, vivienda } = useUnaVivienda(props.params.idVivienda);

    return (
        <div>
            <div>
                {buscando ? <AjaxLoader></AjaxLoader>
                          : <ViviendaCompleta vivienda={vivienda}></ViviendaCompleta>
                }
            </div>
        </div>
    );
}

export default ViviendaDetallada;