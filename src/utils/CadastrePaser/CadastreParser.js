const CadastreParser = (data) => {
  const prefixeExist = data.includes("préfixe");
  //TODO: Add prefixe logic

  if (!data.includes("Section")) {
    throw SyntaxError
  };

  const cleanArray = () => {
    // Remove tab
    const dataArray = data.replace(/\t/g, " ").split(" ");
    // Select data between "surface" and "extrait"
    const surfaceIndex = dataArray.findIndex((str) => /surface/i.test(str));
    const extraitIndex = dataArray.findIndex((str) => /extrait/i.test(str));
    // Handle if "extrait" don't exist
    return extraitIndex === -1
      ? dataArray.slice(surfaceIndex + 1)
      : dataArray.slice(surfaceIndex + 1, extraitIndex - 1);
  };

  /** Remove white space at end and beginning of the string
  and remove empty string from an array */
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

  return Parser(cadastreArray());
};

export default CadastreParser;
