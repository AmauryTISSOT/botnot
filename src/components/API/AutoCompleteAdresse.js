import React, { useEffect, useState } from "react";

const AutoCompleteAdresse = () => {
  const [data, setData] = useState([]);

  const onFillHandler = (event) => {
    setData((prev) => ({
      ...prev,
      input: event.target.value,
    }));
  };

  useEffect(() => {
    fetchAPI(data.input);
  }, [data.input]);

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
        apiData.features.forEach((item, index) => {
          setData((prev) => ({
            ...prev,
            [index]: [
              {
                label: item.properties.label,
                name: item.properties.name,
                postcode: item.properties.postcode,
                city: item.properties.city,
              },
            ],
          }));
        });
      })
      .catch((error) => console.log("request failed", error));
  }

  console.log(data);

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
            <div className="address-feedback">{}</div>
          </div>
        </div>
        <div>
          <div>
            <label>Code Postal</label>
            <input type="text" id="cp" name="cp" />
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
