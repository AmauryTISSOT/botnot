const CadastreParser = (data) => {
  //const prefixeExist = data.includes("préfixe");
  //TODO: Add prefixe logic

  if (!data.includes("Section")) {
    console.log('data don\'t includes "Section"');
    console.log("data : ", data);
    throw SyntaxError;
  }

  const extractAddress = () => {
    // Detect if data is a "copro"
    if (/Dans un ensemble immobilier/i.test(data)) {
      const regex = /à\s(.*?)Figurant/; // find the text between "à" and "Figurant"
      const match = data.match(regex);
      const rawAddress = match[1].replace(".", "").trim();
      const postalCode = rawAddress.match(/\b\d{5}\b/)[0]; // find the postal code
      const streetName = rawAddress.match(/\b\d{5}\b\s(.+)/)[1].trim(); // find the street name and remove the dot "." at the end
      let townName = rawAddress.match(/^\s*(.+)\s+\d{5}\b/)[1].trim();
      if (townName.includes("(")) {
        townName = rawAddress.match(/^[^(]*/)[0].trim(); //remove the "département name"
      }

      return {
        rawAddress,
        townName,
        postalCode,
        streetName,
      };
    } else {
      const regex = /A\s(.*?)Figurant/; // find the text between "A" and "Figurant"
      const match = data.match(regex);
      const rawAddress = match[1]
        .replace(".", ",")
        .split(",")
        .slice(0, 2)
        .join(",")
        .trim();
      const postalCode = rawAddress.match(/\b\d{5}\b/)[0]; // find the postal code
      const streetName = match[1].split(",").slice(1, 2)[0].trim();
      let townName = rawAddress.match(/^\s*(.+)\s+\d{5}\b/)[1].trim();
      if (townName.includes("(")) {
        townName = rawAddress.match(/^[^(]*/)[0].trim(); //remove the "département name"
      }

      return {
        rawAddress,
        townName,
        postalCode,
        streetName,
      };
    }
  };

  // Select data between "Surface" and last "ca" element and remove tab then return a array
  const cleanArray = () => {
    const regexSurface = /surface/i;
    const surfaceIndex = regexSurface.exec(data).index + 8;

    const regex = /\d{2}\sca(?!\S)/g; // Matches "ca" not followed by a non-whitespace character

    let match;
    let lastCaIndex = -1;
    while ((match = regex.exec(data)) !== null) {
      lastCaIndex = match.index;
    }
    lastCaIndex += 5;

    const slicedString = data.slice(surfaceIndex, lastCaIndex);

    if (slicedString.includes("Total surface")) {
      const removeTotalSurface = slicedString.match(/^.*?(?=Total surface)/s);
      return removeTotalSurface[0].replace(/\t/g, " ").split(" ");
    } else {
      return slicedString.replace(/\t/g, " ").split(" ");
    }
  };

  /** Remove white space at end and beginning of the string
  and remove empty string from an array **/
  const cadastreArray = () => {
    const arr = cleanArray().join(" ").split("ca");
    const arrTrim = arr.map((element) => element.trim());
    return arrTrim.filter((str) => str !== "");
  };

  const Section = (array) => array[0];

  const Numero = (array) => array[1];

  const Lieudit = (array) => {
    return array.slice(2, -5).join(" ");
  };

  // Select "xx ha xx a xx" and add "ca"
  const Surface = (array) => {
    return array.slice(-5).concat("ca").join(" ");
  };

  const Parser = (array) => {
    return array.map((element) => ({
      prefixe: NaN,
      section: Section(element.split(" ")),
      numero: Numero(element.split(" ")),
      lieudit: Lieudit(element.split(" ")),
      surface: Surface(element.split(" ")),
    }));
  };

  return {
    address: extractAddress(),
    cadastre: Parser(cadastreArray()),
  };
};

export default CadastreParser;
