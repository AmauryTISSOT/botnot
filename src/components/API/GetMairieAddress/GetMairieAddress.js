const GetMairieAddress = async (postalCode, communeName) => {
  // First, fetch the list of communes matching the given postal code
  const codeCommune = await fetch(
    `https://apicarto.ign.fr/api/codes-postaux/communes/${postalCode}`
  )
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("Invalid response");
    })
    .then((data) => {
      // Find the index of the commune matching the given name
      const index = data.findIndex(
        (obj) => obj.libelleAcheminement === communeName
      );
      return index >= 0 ? data[index].codeCommune : data[0].codeCommune; // Handle Arrondissement (district)
    })
    .catch((error) => console.log(error));

  // Then, fetch the address of the mairie (town hall) for the given code commune
  return await fetch(`https://etablissements-publics.api.gouv.fr/v3/communes/${codeCommune}/mairie
`)
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("Invalid response");
    })
    .then((data) => {
      try {
        const obj = data.features[0].properties.adresses[0];
        // Return the mairie address as an object
        return {
          rue: obj.lignes.join(" "),
          codePostal: obj.codePostal,
          commune: obj.commune,
        };
      } catch (error) {
        console.log(error);
        return "Adresse non trouvée"; // Handle error : address not found
      }
    })
    .catch((error) => console.log(error));
};

export default GetMairieAddress;
