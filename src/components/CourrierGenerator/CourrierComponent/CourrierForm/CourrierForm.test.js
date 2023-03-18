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
      target: { value: 'Test etatCivil input' },
    });
    fireEvent.submit(etatCivilInput);
    const etatCivilObject = screen.getByText(/Nom :/i);
    expect(etatCivilObject).toBeInTheDocument();
  });

  test('renders bienImmo array after form submission', () => {
    render(<CourrierForm />);
    const bienImmoInput = screen.getByLabelText(/BIEN IMMOBILIER/i);
    fireEvent.change(bienImmoInput, {
      target: { value: 'Test bienImmo input' },
    });
    fireEvent.submit(bienImmoInput);
    const bienImmoArray = screen.getByText(/Section :/i);
    expect(bienImmoArray).toBeInTheDocument();
  });
});
