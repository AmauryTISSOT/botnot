import CadastreParser from "./CadastreParser";

describe("CadastreParser unit testing", () => {
  test("should return the right value with one line data", () => {
    const testData = CadastreParser(
      "DESIGNATION Dans un ensemble immobilier situé à PARIS 12ÈME ARRONDISSEMENT 75012 57 Boulevard de Poniatowski, et 7 A rue Claude Decaen. Figurant ainsi au cadastre : Section N° Lieudit Surface BZ 22 7 A RUE CLAUDE DECAEN 00 ha 22 a 11 ca Un extrait de plan cadastral est annexé."
    );
    expect(testData).toStrictEqual({
      address: {
        rawAddress:
          "PARIS 12ÈME ARRONDISSEMENT 75012 57 Boulevard de Poniatowski, et 7 A rue Claude Decaen",
        townName: "PARIS 12ÈME ARRONDISSEMENT",
        postalCode: "75012",
        streetName: "57 Boulevard de Poniatowski, et 7 A rue Claude Decaen",
      },
      cadastre: [
        {
          prefixe: NaN,
          section: "BZ",
          numero: "22",
          lieudit: "7 A RUE CLAUDE DECAEN",
          surface: "00 ha 22 a 11 ca",
        },
      ],
    });
  });
  test("should return the right value with multiple line data", () => {
    const testData = CadastreParser(
      "DESIGNATION Dans un ensemble immobilier situé à MEUDON (HAUTS-DE-SEINE) 92360 16 Avenue de Celle.       Figurant ainsi au cadastre : Section	N°	Lieudit	Surface AR	43	AV MAL DE LATTRE DE TASSIGNY	00 ha 27 a 80 ca AR	44	AV MAL DE LATTRE DE TASSIGNY	00 ha 11 a 15 ca AR	46	AV MAL DE LATTRE DE TASSIGNY	00 ha 02 a 00 ca AR	190	RUE DE L'AVENIR	05 ha 18 a 09 ca     Les lots de copropriété suivants : Lot numéro quatre mille cinq cent quatre-vingt-sept  (4587)   Une cave numéro 88 au sous-sol du bâtiment H 1.  Et les un /cent mille quatre cent cinquante-troisième (1 /100453 ème) des parties communes générales.      Lot numéro quatre mille sept cent vingt-trois  (4723)  Un appartement de 7 pièces, situé dans le bâtiment H 1 au 4ème étage.  Et les deux cent quatorze /cent mille quatre cent cinquante-troisièmes (214 /100453 èmes) des parties communes générales.      Tel que le BIEN existe, avec tous droits y attachés, sans aucune exception ni réserve."
    );
    expect(testData).toStrictEqual({
      address: {
        rawAddress: "MEUDON (HAUTS-DE-SEINE) 92360 16 Avenue de Celle",
        townName: "MEUDON",
        postalCode: "92360",
        streetName: "16 Avenue de Celle",
      },
      cadastre: [
        {
          prefixe: NaN,
          section: "AR",
          numero: "43",
          lieudit: "AV MAL DE LATTRE DE TASSIGNY",
          surface: "00 ha 27 a 80 ca",
        },
        {
          prefixe: NaN,
          section: "AR",
          numero: "44",
          lieudit: "AV MAL DE LATTRE DE TASSIGNY",
          surface: "00 ha 11 a 15 ca",
        },
        {
          prefixe: NaN,
          section: "AR",
          numero: "46",
          lieudit: "AV MAL DE LATTRE DE TASSIGNY",
          surface: "00 ha 02 a 00 ca",
        },
        {
          prefixe: NaN,
          section: "AR",
          numero: "190",
          lieudit: "RUE DE L'AVENIR",
          surface: "05 ha 18 a 09 ca",
        },
      ],
    });
  });
});
