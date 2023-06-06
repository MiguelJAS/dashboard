export function getUnaVivienda (id) {

    //Se recibirán datos con el fetch dependiendo de la id deseada. Esta id es dada por el hook useUnVivienda
    return fetch(`http://localhost:8080/api/propiedades/${id}`)
      .then(response => {
          const data = response.json();
          return data;
    })
}