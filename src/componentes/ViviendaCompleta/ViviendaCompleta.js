import './ViviendaCompleta.css'

const ViviendaCompleta = (props) => {

    let altImagen = "Vivienda " + props.vivienda.tipo;
    let imagenes = props.vivienda.imagenes.split(",");

    return (
        <div>
            <figure className="bg-gray-300 w-6/12 m-auto my-20 rounded-xl">
                <p>{props.vivienda.tipo}</p>
                <img className="w-80" src={imagenes[0]} alt={altImagen}></img>
                <figcaption>
                    <p>Tiene {props.vivienda.superficie}m<sup>2</sup></p>
                    <p>Su dirección es {props.vivienda.direccion}</p>
                    <p>Tiene {props.vivienda.habitaciones} habitaciones y {props.vivienda.banyos} baños</p>
                    <p>Su precio actual es de {props.vivienda.precio}€</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default ViviendaCompleta;