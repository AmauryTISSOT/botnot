import React, { useEffect, useState } from "react";

const AutoCompleteAdresse = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [addressSelection, setAddressSelection] = useState([]);
  const arrayIndex = data.length - 5;
  let sliceArray = data.slice(arrayIndex - 5, arrayIndex);

  const onFillHandler = (event) => {
    setInput((prev) => ({
      ...prev,
      input: event.target.value,
    }));
  };

  const displayLabel = () => {
    // console.log("arrayIndex", arrayIndex);
    // console.log("sliceArray", sliceArray);
    return sliceArray.map((item, index) => (
      <div key={index} id={index} onClick={(e) => getValue(e)}> 
        {item.properties.label}
      </div>
    ));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchAPI(input.input);
    }, 500);
  }, [input.input]);

  const getValue = (event) => {
    const indexValue = event.target.id
    setAddressSelection(
        {
          name: sliceArray[indexValue].properties.name,
          postecode: sliceArray[indexValue].properties.postcode,
          city: sliceArray[indexValue].properties.city,
        },
      );
      console.log("indexValue", indexValue)
      console.log("sliceArray", sliceArray)
      console.log("addressSelection", addressSelection)
    
  }


  async function fetchAPI(value) {
    const url = new URL("http://api-adresse.data.gouv.fr/search");
    const params = { q: value };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then((response) => response.json())
      .then((apiData) => {
        console.log("request succeeded with JSON response", apiData);
        apiData.features.forEach((item) => {
          setData((oldArray) => [...oldArray, item]);
        });
      })
      .catch((error) => console.log("request failed", error));
  }

  return (
    <>
      <form>
        <div>
          <div>
            <label>Adresse</label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              //   autocomplete="off"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              placeholder="Indiquer l'adresse ici..."
              onChange={onFillHandler}
            />
            <div className="address-feedback">{displayLabel()}</div>
          </div>
        </div>
        <div>
          <div>
            <label>Code Postal</label>
            {/* FIXME: display value on click */}
            <input type="text" id="cp" name="cp" value={addressSelection.postcode} />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" id="ville" name="ville" required />
          </div>
        </div>
      </form>
    </>
  );
};

export default AutoCompleteAdresse;
