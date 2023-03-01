const EtatCivilParser = (data) => {
  const sentences = data.split(".");

  const Sex = () => {
    if (sentences[0].includes("Madame")) {
      return "female";
    }
    if (sentences[0].includes("Monsieur")) {
      return "male";
    }
  };

  const firstLineArray = sentences[0].split(" ");

  const findSurnameIndex = firstLineArray.findIndex((str) =>
    /\b[A-Z]+\b/g.test(str)
  );

  const Name = sentences[0].split(" ").slice(1, findSurnameIndex);

  // remove the coma at the end of the string
  const BirthName = firstLineArray[findSurnameIndex].replace(",", "");

  // remove the space at the beginning of the string
  const Job = sentences[0].split(",")[1].split("").slice(1).join("");

  const AddressSentencesIndex = sentences[0]
    .split(",")
    .findIndex((str) => /demeurant/i.test(str));

  const AddressSentences = sentences[0].split(",")[AddressSentencesIndex];

  // remove 'demeurant à'
  const StringAddress = AddressSentences.split(" ").slice(3).join(" ");

  const Address = StringAddress.split("")
    .slice(StringAddress.split("").findIndex((str) => /\)/i.test(str)) + 2)
    .join("");

  const Town = StringAddress.split("")
    .slice(
      0,
      StringAddress.split("").findIndex((str) => /\(/i.test(str))
    )
    .slice(0, -1)
    .join("");

  const PostalCode = /\(([^)]+)\)/g.exec(StringAddress)[1];

  const PlaceOfBirth = sentences[1]
    .split(",")[0]
    .split("")
    .slice(
      sentences[1].split(",")[0].split("").indexOf("à") + 2,
      sentences[1]
        .split(",")[0]
        .split("")
        .findIndex((str) => /\(/i.test(str)) - 1
    )
    .join("");

  const DateOfBirthString = sentences[1]
    .split(",")[1]
    .split("")
    .slice(
      sentences[1]
        .split(",")[1]
        .split("")
        .findIndex((str) => /\d+/g.test(str))
    )
    .join("");

  const DayOfBirth = () => {
    const day = DateOfBirthString.split(" ")[0];
    if (day.length === 1) {
      return 0 + day;
    } else return day;
  };

  const MonthOfBirth = () => {
    const month = DateOfBirthString.split(" ")[1];
    const frenchMonthArray = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];
    const monthString = (frenchMonthArray.indexOf(month) + 1).toString();
    return monthString.length === 1 ? 0 + monthString : monthString;
  };

  const YearOfBirth = DateOfBirthString.split(" ")[2];

  const DateOfBirth = `${DayOfBirth()}/${MonthOfBirth()}/${YearOfBirth}`;

  const PlaceOfBirthPostalCode = /\(([^)]+)\)/g.exec(sentences[1])[1];

  const Single = () => {
    return data.includes("Célibataire");
  };

  const Pacs = () => {
    const conditions = [
      "Non liée par un pacte civil de solidarité",
      "Non lié par un pacte civil de solidarité"
    ];

    return !conditions.some((element) => data.includes(element));
  };

  const Married = () => {
    return data.includes("Mariés");
  };

  const Divorced = () => {
    const conditions = ["Divorcée", "Divorcé"];
    return conditions.some((element) => data.includes(element));
  };

  const Widow = () => {
    return data.includes("Veuve" || "Veuf");
  };

  const Nationality = () => {
    const index = sentences.findIndex((str) => /De nationalité/i.test(str));
    return sentences[index].split(" ")[3];
  };

  return {
    sex: Sex(),
    name: Name,
    birthName: BirthName,
    surname: NaN,
    job: Job,
    address: Address,
    town: Town,
    postalCode: PostalCode,
    placeOfBirth: PlaceOfBirth,
    placeOfBirthPostalCode: PlaceOfBirthPostalCode,
    dateOfBirth: DateOfBirth,
    single: Single(),
    pacs: Pacs(),
    married: Married(),
    divorced: Divorced(),
    widow: Widow(),
    nationality: Nationality(),
  };
};

export default EtatCivilParser;
