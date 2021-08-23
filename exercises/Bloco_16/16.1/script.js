window.onload = () => {
  const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  const rootReducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
    case 'NEXT_COLOR':
      return ({
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      });
    case 'PREVIOUS_COLOR':
      return ({
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      });
    case 'RANDOM_COLOR':
      return ({
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length - 1,
      });
    default:
      return state;
    }
  }

  function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
  }

  const store = Redux.createStore(rootReducer);

  const buttonNextColor = document.querySelector("#next");
  const buttonPreviousColor = document.querySelector("#previous");

  buttonNextColor.addEventListener("click", () => {
    store.dispatch({ type: 'NEXT_COLOR' });
  });

  buttonPreviousColor.addEventListener("click", () => {
    store.dispatch({ type: 'PREVIOUS_COLOR' });
  });

  const buttonRandomColor = document.querySelector("#random");

  buttonRandomColor.addEventListener("click", () => {
    store.dispatch({ type: 'RANDOM_COLOR' });
  });

  store.subscribe(() => {
    const { colors, index } = store.getState();
    document.getElementById('value').innerHTML = colors[index];
    document.getElementById('container').style.backgroundColor = colors[index];
  });
}