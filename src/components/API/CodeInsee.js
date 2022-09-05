import React, { useEffect, useState } from "react";

const CodeInsee = ({codePostal}) => {
    const [listeCommune, setListeCommune] = useState();


    useEffect(() => {
        fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${codePostal}`)
          .then((response) => {
            if (response.status === 200) return response.json();
            else throw new Error("Invalid response");
          })
          .then((data) => {
            // console.log(data)
              setListeCommune([data])
          })
          .catch(error => setListeCommune(["invalid"]))
      }, [codePostal]);
    
      console.log("liste",listeCommune)



  return (
    <>
    
    </>
  )
}

export default CodeInsee