import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CourrierForm from './CourrierForm';
import "@testing-library/jest-dom";

describe('CourrierForm unit testing', () => {
  test('renders the form inputs', () => {
    render(<CourrierForm />);
    const etatCivilInput = screen.getByLabelText(/ETAT-CIVIL/i);
    const bienImmoInput = screen.getByLabelText(/BIEN IMMOBILIER/i);
    expect(etatCivilInput).toBeInTheDocument();
    expect(bienImmoInput).toBeInTheDocument();
  });

  test('updates inputs on change', () => {
    render(<CourrierForm />);
    const etatCivilInput = screen.getByLabelText(/ETAT-CIVIL/i);
    fireEvent.change(etatCivilInput, { target: { value: 'Test input' } });
    expect(etatCivilInput).toHaveValue('Test input');
  });

  test('renders etatCivil object after form submission', () => {
    render(<CourrierForm />);
    const etatCivilInput = screen.getByLabelText(/ETAT-CIVIL/i);
    fireEvent.change(etatCivilInput, {
      target: { value: "Madame Danielle Marie Jeanne DUPONT, Directrice d'usine, demeurant à PARIS (75001) 1 rue inconnue.  Née à BOURG-ARGENTAL (42220) le 4 septembre 1900.  Divorcée de Monsieur Jean-Yves PATRICK suivant jugement rendu par le tribunal  de SAINT ETIENNE (00000) le 19 octobre 1980, et non remariée.  Non liée par un pacte civil de solidarité.  De nationalité française.  Résidente au sens de la réglementation fiscale" },
    });
    fireEvent.submit(etatCivilInput);
    const etatCivilObject = screen.getByText(/prénom/i);
    expect(etatCivilObject).toBeInTheDocument();
  });

  test('renders error text for etatCivil after form submission', () => {
    render(<CourrierForm />);
    const etatCivilInput = screen.getByLabelText(/ETAT-CIVIL/i);
    fireEvent.change(etatCivilInput, {
      target: { value: 'Test etatCivil input' },
    });
    fireEvent.submit(etatCivilInput);
    const etatCivilObject = screen.getByText(/Erreur/i);
    expect(etatCivilObject).toBeInTheDocument();
  });

  test('renders bienImmo array after form submission', () => {
    render(<CourrierForm />);
    const bienImmoInput = screen.getByLabelText(/BIEN IMMOBILIER/i);
    fireEvent.change(bienImmoInput, {
      target: { value: "DESIGNATION Dans un ensemble immobilier situé à PARIS 12ÈME ARRONDISSEMENT 75012 57 Boulevard de Poniatowski, et 7 A rue Claude Decaen.       Figurant ainsi au cadastre : Section	N°	Lieudit	Surface BN	33	7 A RUE CLAUDE DECAEN	00 ha 22 a 11 ca  Un extrait de plan cadastral est annexé.  Les lots de copropriété suivants :" },
    });
    fireEvent.submit(bienImmoInput);
    const bienImmoArray = screen.getByText(/section/i);
    expect(bienImmoArray).toBeInTheDocument();
  });

  test('renders error text for bienImmo form submission', () => {
    render(<CourrierForm />);
    const bienImmoInput = screen.getByLabelText(/BIEN IMMOBILIER/i);
    fireEvent.change(bienImmoInput, {
      target: { value: 'Test bienImmo input' },
    });
    fireEvent.submit(bienImmoInput);
    const bienImmoArray = screen.getByText(/Erreur/i);
    expect(bienImmoArray).toBeInTheDocument();
  });
});
