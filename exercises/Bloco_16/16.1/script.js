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
    default:
      return state;
    }
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

  store.subscribe(() => {
    const { colors, index } = store.getState();
    document.getElementById('value').innerHTML = colors[index];
    document.getElementById('container').style.backgroundColor = colors[index];
  });
}