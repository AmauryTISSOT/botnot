import EtatCivilParser from "./EtatCivilParser";

describe('EtatCivilParser unit testing', () => {
    test('should return correct data with celibataire', () => {
        const test = EtatCivilParser("Madame Danielle Marie Jeanne DUPONT, Directrice d'usine, demeurant à PARIS (75001) 1 rue inconnue. Née à BOURG-ARGENTAL (42220), le 4 septembre 1900. Célibataire. Non liée par un pacte civil de solidarité. De nationalité française. Non résident au sens de la réglementation fiscale.")

        expect(test).toBe({
            sex: 'female',
            name: ['Danielle', 'Marie', 'Jeanne'],
            birthName : 'DUPONT',
            surname: NaN,
            job: "Directice d'usine",
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
    test.skip('should return correct data with divorcé', () => {

    })
    test.skip('should return correct data with veuf', () => {

    })
 })