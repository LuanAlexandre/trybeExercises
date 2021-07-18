import React from 'react';
import { render, fireEvent, cleanup, waitForDomChange } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', async () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByRole, getByText, getByLabelText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const inputTodo = getByLabelText('Tarefa:');
    const addButton = getByText('Adicionar');
    const tasks = getByRole('list');

    fireEvent.change(inputTodo, { target: { value: listTodo[0] } });
    fireEvent.click(addButton);
    fireEvent.change(inputTodo, { target: { value: listTodo[1] } });
    fireEvent.click(addButton);
    fireEvent.change(inputTodo, { target: { value: listTodo[2] } });
    fireEvent.click(addButton);

    expect(tasks).toHaveTextContent(listTodo[0]);
    expect(tasks).toHaveTextContent(listTodo[1]);
    expect(tasks).toHaveTextContent(listTodo[2]);

  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const content = 'Preencher o forms';
    const { getByText } = render(<Item content={ content } />);
    const task = getByText(content);
    expect(task).toBeInTheDocument();
  })
})
