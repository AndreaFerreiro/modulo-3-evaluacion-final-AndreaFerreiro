const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((objectAPI) => {
        return {
          id: objectAPI.id,
          image: objectAPI.image,
          name: objectAPI.name,
          species: objectAPI.species,
          status: objectAPI.status,
          origin: objectAPI.origin.name,
          episodes: objectAPI.episode.length,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
      return cleanData;
    });
};
export default callToApi;
