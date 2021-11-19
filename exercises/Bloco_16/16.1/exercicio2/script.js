const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer});

const store = Redux.createStore(rootReducer);

const changeFirstName = (firstName) => ({
  type: 'CHANGE_FIRST_NAME',
  payload: firstName,
});

const changeLastName = (lastName) => ({
  type: 'CHANGE_LAST_NAME',
  payload: lastName,
});

window.onload = () => {
  setTimeout(() => {
    //Seu dispatch vem aqui //
    const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
    store.dispatch({ type: 'CHANGE_FIRST_NAME'});
    store.dispatch({ type: 'CHANGE_LAST_NAME'});
  }, 3000);
}

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
  const nomeUm = document.getElementById('nome-1');
  const sobrenomeUm = document.getElementById('sobrenome-1');
  const nomeDois = document.getElementById('nome-2');
  const sobrenomeDois = document.getElementById('sobrenome-2');
  nomeUm.innerHTML = meuSegundoReducer.nome;
  sobrenomeUm.innerHTML = meuSegundoReducer.sobrenome;
  nomeDois.innerHTML = meuPrimeiroReducer.nome;
  sobrenomeDois.innerHTML = meuPrimeiroReducer.sobrenome;
});