import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText, getByRole} = render(<App />);
    const button = getByRole('button');
    const textButton = getByText(/adicionar/i);
    expect(button).toBeInTheDocument();
    expect(textButton).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText, getByRole} = render(<App />);
    const task = 'Estudar';
    const button = queryByText(/adicionar/i);
    const inputToDo = getByLabelText(/tarefa:/i)
    const toDoListText = getByRole('list');
    fireEvent.change(inputToDo, { target: { value: task } });
    fireEvent.click(button);
    expect(inputToDo).toHaveValue('');
    expect(toDoListText).toHaveTextContent(task);
  });
});
