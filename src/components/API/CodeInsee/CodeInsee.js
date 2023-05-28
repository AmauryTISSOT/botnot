import React, { useEffect, useState } from "react";

const CodeInsee = ({ setState }) => {
  const [listeCommune, setListeCommune] = useState();
  const [input, setInput] = useState({
    postcode: "",
  });
  const [matchResponse, setMatchResponse] = useState(false);

  useEffect(() => {
    if (input.postcode.length >= 5) {
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
    }
  }, [input.postcode]);

  const onFillHandler = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleChange = (e) => {
    // console.log("object:", listeCommune[0][e.target.value])
    if (e.target.value !== "") {
      setState((prev) => ({
        ...prev,
        communeInfo: listeCommune[0][e.target.value],
      }));
    }
  };

  //TODO: form validation with CSS

  return (
    <div className="w-full flex items-start justify-center flex-col px-1 py-1">
      <form className="w-full flex items-center justify-between gap-2 py-1">
        <label>Code postal : </label>
        <input
          type="number"
          required
          data-testid="input"
          className="w-20 bg-slate-100 border-1 rounded text-end"
          id="postcode"
          onChange={onFillHandler}
        />
      </form>
      <div className="w-full flex items-center justify-between gap-2 py-1">
        <label>Commune : </label>
        <select onClick={handleChange} className="bg-slate-100">
          <option value="">--Selectionner une commune--</option>
          {matchResponse &&
            listeCommune[0].map((item, keys) => (
              <option key={keys} value={keys}>
                {item.nomCommune.toUpperCase()}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CodeInsee;
