
const getDataFromApi = () => {

  return fetch(
    "//rickandmortyapi.com/api/character"
  )
    .then((response) => response.json())
    .then((data) => {
    //  console.log(data.results[0].name);
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode.length,
        };
      });
      // console.log(cleanData); para ver el array con los datos que nos interesan
      return cleanData;
       
    });
};

export default getDataFromApi;
