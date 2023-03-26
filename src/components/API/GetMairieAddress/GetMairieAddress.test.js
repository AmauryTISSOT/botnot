import GetMairieAddress from "./GetMairieAddress";

describe("GetMairieAddress unit testing", () => {
  test("return the correct address", async () => {
    const result = await GetMairieAddress(27310, "BOURG-ACHARD");
    expect(result).toStrictEqual({
      rue: "Place de la Mairie",
      codePostal: "27310",
      commune: "Bourg-Achard",
    });
  });
  test("can handle arrondissement (district)", async () => {
    const result = await GetMairieAddress(75012, "PARIS 12ÈME ARRONDISSEMENT");
    expect(result).toStrictEqual({
      rue: "130 avenue Daumesnil",
      codePostal: "75570",
      commune: "Paris Cedex 12",
    });
  });
  test("can handle error", async () => {
    const result = await GetMairieAddress(75000, "");
    expect(result).toStrictEqual("Adresse non trouvée");
  });
});
