import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    render(<App />);
    const btnAdd = screen.getByText('Adicionar');

    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd.type).toBe('button');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const newTask = 'Workout!';
    const inptTask =  screen.getByLabelText('Tarefa');
    const btnAdd = screen.queryByText('Adicionar');

    userEvent.type(inptTask, newTask);
    expect(screen.queryByText(newTask)).not.toBeInTheDocument();

    userEvent.click(btnAdd);
    expect(screen.queryByText(newTask)).toBeInTheDocument();

  });
});
