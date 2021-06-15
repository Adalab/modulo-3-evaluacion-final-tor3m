
  //En este modulo hay 3 funciones
  //En este paso hacemos un fetch para que nos devuelva los datos de la Api.
  //El return del fetch nos devuelve la cabecera, resumen de lo que contiene la Api.
  //En el siguiente .then  se obtiene datos que son leidos y convertida a json
  //En el tercer .then recoge la respuesta con la api que vamos a trabajar.

const getDataFromApi = () => {

  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
    //  console.log(data.results[0].name);
    // con el map método se crea un nuevo array con el resultado de llamar una función por cada elemento del array 
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
        };
      });
      // console.log(cleanData); para ver el array con los dato que nos interesan
      return cleanData;
       
    });
};

export default getDataFromApi;
