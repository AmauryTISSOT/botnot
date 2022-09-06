import React, { useEffect, useState } from "react";

const CodeInsee = ({setState}) => {
  const [listeCommune, setListeCommune] = useState();
  const [input, setInput] = useState("");
  const [matchResponse, setMatchResponse] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://apicarto.ign.fr/api/codes-postaux/communes/${input.postcode}`
      )
        .then((response) => {
          if (response.status === 200) return response.json();
          else throw new Error("Invalid response");
        })
        .then((data) => {
          setListeCommune([data]);
          setMatchResponse(true);
        })
        .catch((error) => {
          setListeCommune(["invalid"]);
          setMatchResponse(false);
        });
    }, 200);
  }, [input.postcode]);

//   console.log("input", input.postcode);
//   console.log(listeCommune);

  const onFillHandler = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleChange = (e) => {
    // console.log("object:", listeCommune[0][e.target.value])

    setState((prev) => ({
        ...prev,
        communeInfo: listeCommune[0][e.target.value],
      }));
  }


  //TODO: form validation with CSS
  return (
    <>
      <div>
        <form>
        <label>Code postal :</label>
        <input
          type="number"
          required
          data-testid="input"
          id="postcode"
          onChange={onFillHandler}
        />
        </form>
      </div>

      <label>Commune :</label>
      <select onClick={handleChange}>
        <option value="">--Selectionner une commune--</option>
        {/* {console.log(matchResponse)} */}
        {matchResponse &&
          listeCommune[0].map((item, keys) => (
            <option key={keys} value={keys} >
              {item.nomCommune.toUpperCase()}
            </option>
          ))}
      </select>
    </>
  );
};

export default CodeInsee;
