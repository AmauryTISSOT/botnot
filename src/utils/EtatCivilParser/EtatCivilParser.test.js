import EtatCivilParser from "./EtatCivilParser";

describe('EtatCivilParser unit testing', () => {
    test('should return correct data with celibataire', () => {
        const test = EtatCivilParser("Madame Danielle Marie Jeanne DUPONT, Directrice d'usine, demeurant à PARIS (75001) 1 rue inconnue. Née à BOURG-ARGENTAL (42220), le 4 septembre 1900. Célibataire. Non liée par un pacte civil de solidarité. De nationalité française. Non résident au sens de la réglementation fiscale.")

        expect(test).toStrictEqual({
            sex: 'female',
            name: ['Danielle', 'Marie', 'Jeanne'],
            birthName : 'DUPONT',
            surname: NaN,
            job: "Directrice d'usine",
            address: "1 rue inconnue",
            town: 'PARIS',
            postalCode: '75001',
            placeOfBirth : 'BOURG-ARGENTAL',
            placeOfBirthPostalCode: '42220',
            dateOfBirth: '04/09/1900',
            single: true,
            pacs: false,
            married: false,
            divorced: false,
            widow : false,
            nationality: 'française'
        })
        
    })
    test.skip('should return correct data with mariré', () => {

    })
    test.skip('should return correct data with pacs', () => {
    
    })
    test('should return correct data with divorcé', () => {
        const test = EtatCivilParser("Monsieur Jules Alexis DUPONT, pharmacien, demeurant à GENEVE (SUISSE) 45 avenue des Alpes. Né à LYON (69000), le 15 août 2009. Divorcé de Madame Gillian Maire PATRICK suivant jugement rendu par le tribunal de PARIS le 28 octobre 1930, et non remarié.Non lié par un pacte civil de solidarité. De nationalité française. Non résident au sens de la réglementation fiscale.")

        expect(test).toStrictEqual({
            sex: 'male',
            name: ['Jules', 'Alexis'],
            birthName : 'DUPONT',
            surname: NaN,
            job: "pharmacien",
            address: "45 avenue des Alpes",
            town: 'GENEVE',
            postalCode: 'SUISSE',
            placeOfBirth : 'LYON',
            placeOfBirthPostalCode: '69000',
            dateOfBirth: '15/08/2009',
            single: false,
            pacs: false,
            married: false,
            divorced: true,
            widow : false,
            nationality: 'française'
        })
    })
    test('should return correct data with veuf', () => {
        const test = EtatCivilParser("Madame Danièle Louise Eugénie DUPONT, retraitée, demeurant à TOULON (83000) 1 avenue de la République.Née à PLERIN (22190), le 26 novembre 1900. Veuve de Monsieur Roger Bernard Laurent PATRICK et non remariée. Non liée par un pacte civil de solidarité. De nationalité française. Résidente au sens de la réglementation fiscale.")

      expect(test).toStrictEqual({
            sex: 'female',
            name: ['Danièle', 'Louise', 'Eugénie'],
            birthName : 'DUPONT',
            surname: NaN,
            job: "retraitée",
            address: "1 avenue de la République",
            town: 'TOULON',
            postalCode: '83000',
            placeOfBirth : 'PLERIN',
            placeOfBirthPostalCode: '22190',
            dateOfBirth: '26/11/1900',
            single: false,
            pacs: false,
            married: false,
            divorced: false,
            widow : true,
            nationality: 'française'
        })
    })
 })