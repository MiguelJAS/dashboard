import Vivienda from "../Vivienda/Vivienda";

const ListaViviendas = (props) => {

  //Establecemos el criterio de ordenación con la fución ordenarViviendas()
  //Como la función .sort() ordena de A-Z y posteriormente de a-z, convertimos todos a mayúsculas para que que tenga el orden deseado, a saber, Aa,Bb...Zz (y al revés)
  function ordenarViviendas(viviendaa, viviendab) {
    if (props.actualizarOrdenacion === "A...Z") {
      if (viviendaa.name.toUpperCase() < viviendab.name.toUpperCase()) {
        return -1;
      } else if (viviendaa.name.toUpperCase() > viviendab.name.toUpperCase()) {
        return 1;
      }
      return 0;
    } else if (props.actualizarOrdenacion === "Z...A") {
      if (viviendaa.name.toUpperCase() < viviendab.name.toUpperCase()) {
        return 1;
      } else if (viviendaa.name.toUpperCase() > viviendab.name.toUpperCase()) {
        return -1;
      }
      return 0;
    }
  }

  //Para el .filter se devolverá true (es decir, se muestran todos los viviendas) si el seleccionable clickeado es "Todos"
  //De lo contrario, se comparará el seleccionable clickeado con el atributo tipo vivienda/género/status del vivienda,
  //devolviendo para algunos vivienda true, y para otros false (solo se mostrarán los que devuelvan true)
  function filtrarTipoVivienda(vivienda) {
    return props.actualizarTipoVivienda === "Todos" ? true
      : vivienda.species === props.actualizarTipoVivienda;
  }

  function filtrarGenero(vivienda) {
    return props.actualizarGenero === "Todos" ? true
      : vivienda.gender === props.actualizarGenero;
  }

  function filtrarStatus(vivienda) {
    return props.actualizarStatus === "Todos" ? true
      : vivienda.status === props.actualizarStatus;
  }

  function muestraViviendas(vivienda) {
    return <Vivienda key={vivienda.id} vivienda={vivienda}></Vivienda>;
  }

  return (
    <div>
      <ul className="mx-28">
        {props.listaViviendas
          // .filter(filtrarTipoVivienda)
          // .filter(filtrarGenero)
          // .filter(filtrarStatus)
          // .sort(ordenarViviendas)
          .map(muestraViviendas)}
      </ul>
    </div>
  );
}

export default ListaViviendas;