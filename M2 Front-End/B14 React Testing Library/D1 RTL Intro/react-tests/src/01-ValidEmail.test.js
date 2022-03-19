import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

test('Email isValid',  () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);

  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Email isNotValid',  () => {
  const EMAIL_USER = '@email.com';
  render(<ValidEmail email={ EMAIL_USER }/>);

  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Email isnt displayed if email input is empty?', () => {
  render(<ValidEmail email="" />);

  const isValidText = screen.queryByTestId('email-validation');
  expect(isValidText).not.toBeInTheDocument();
});

test('Valid email is green?', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('email-validation');
  expect(isValidText).toHaveAttribute('class', 'green-text');
})

test('Invalid email is red?', () => {
  const EMAIL_USER = '@gmail.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('email-validation');
  expect(isValidText).toHaveAttribute('class', 'red-text');
})