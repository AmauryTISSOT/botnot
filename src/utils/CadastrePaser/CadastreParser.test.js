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
  test("should return the right value with terrain data", () => {
    const testData = CadastreParser(
      "IDENTIFICATION DU BIEN DESIGNATION A PEYRE (LANDES) 40700, Lieu-dit PERE, Sur la parcelle 38 présence d'une vieille grange en ruine, effondrée, La majorité de la toiture et du plancher est écroulée. Il n'est pas possible de pénétrer en raison du risque manifeste d'effondrement des derniers éléments . Figurant ainsi au cadastre : Section	N°	Lieudit	Surface D	38	PERE	00 ha 01 a 56 ca Tel que le BIEN existe, avec tous droits y attachés, sans aucune exception ni réserve."
    );
    expect(testData).toStrictEqual({
      address: {
        rawAddress: "PEYRE (LANDES) 40700, Lieu-dit PERE",
        townName: "PEYRE",
        postalCode: "40700",
        streetName: "Lieu-dit PERE",
      },
      cadastre: [
        {
          prefixe: NaN,
          section: "D",
          numero: "38",
          lieudit: "PERE",
          surface: "00 ha 01 a 56 ca",
        },
      ],
    });
  });
  test("should return the right value with house data", () => {
    const testData = CadastreParser(
      "DESIGNATION A HUELGOAT (FINISTÈRE) 29690, 7 Route de Berrien, Une maison à usage d'habitation. Figurant ainsi au cadastre : Section	N°	Lieudit	Surface AC	336	ROUTE DE BERRIEN	00 ha 06 a 31 ca AC	337	ROUTE DE BERRIEN	00 ha 04 a 35 ca AC	338	ROUTE DE BERRIEN	00 ha 16 a 43 ca AC	342	ROUTE DE BERRIEN	00 ha 09 a 41 ca Total surface : 00 ha 36 a 50 ca Tel que le BIEN existe, avec tous droits y attachés, sans aucune exception ni réserve."
    );
    expect(testData).toStrictEqual({
      address: {
        rawAddress: "HUELGOAT (FINISTÈRE) 29690, 7 Route de Berrien",
        townName: "HUELGOAT",
        postalCode: "29690",
        streetName: "7 Route de Berrien",
      },
      cadastre: [
        {
          prefixe: NaN,
          section: "AC",
          numero: "336",
          lieudit: "ROUTE DE BERRIEN",
          surface: "00 ha 06 a 31 ca",
        },
        {
          prefixe: NaN,
          section: "AC",
          numero: "337",
          lieudit: "ROUTE DE BERRIEN",
          surface: "00 ha 04 a 35 ca",
        },
        {
          prefixe: NaN,
          section: "AC",
          numero: "338",
          lieudit: "ROUTE DE BERRIEN",
          surface: "00 ha 16 a 43 ca",
        },
        {
          prefixe: NaN,
          section: "AC",
          numero: "342",
          lieudit: "ROUTE DE BERRIEN",
          surface: "00 ha 09 a 41 ca",
        },
      ],
    });
  });
  test("should return the right value with copropriété data", () => {
    const testData = CadastreParser(
      "Dans un ensemble immobilier situé à MONTPELLIER (HÉRAULT) 34000 19 Quai des Tanneurs. Figurant ainsi au cadastre : Section	N°	Lieudit	Surface BZ	603	19 Quai des Tanneurs	00 ha 19 a 93 ca"
    );
    expect(testData).toStrictEqual({
      address: {
        rawAddress: "MONTPELLIER (HÉRAULT) 34000 19 Quai des Tanneurs",
        townName: "MONTPELLIER",
        postalCode: "34000",
        streetName: "19 Quai des Tanneurs",
      },
      cadastre: [
        {
          prefixe: NaN,
          section: "BZ",
          numero: "603",
          lieudit: "19 Quai des Tanneurs",
          surface: "00 ha 19 a 93 ca",
        },
      ],
    });
  });
});
