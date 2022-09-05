import React, { useEffect, useState } from "react";

const CodeInsee = () => {
  const [listeCommune, setListeCommune] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {

    //FIXME: need to copy the fetch function on autocomplete address
    setTimeout(() => {
      fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${input.postcode}`)
        .then((response) => {
          if (response.status === 200) return response.json();
          else throw new Error("Invalid response");
        })
        .then((data) => {
          // console.log(data)
          setListeCommune([data]);
        })
        .catch((error) => setListeCommune(["invalid"]));
    }, 200);
  }, [input.postcode]);

  console.log("input", input.postcode);
  console.log(listeCommune)

  const onFillHandler = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      <div>
        <label>Code postal :</label>
        <input
          type="number"
          data-testid="input"
          id="postcode"
          onChange={onFillHandler}
        />
      </div>

      <label>Commune :</label>
      <select>
        <option value="">--Selectionner une commune--</option>
        {/* {listeCommune !== undefined &&
          listeCommune[0].map((item, keys) => (
            <option key={keys} value={item.nomCommune}>
              {item.nomCommune}
            </option>
          ))} */}
      </select>
    </>
  );
};

export default CodeInsee;
