import { NEXT_COLOR, PREVIOUS_COLOR } from "../actions/index";

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const rootReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case NEXT_COLOR:
    return ({
      ...state,
      index: action.index,
    });
  case PREVIOUS_COLOR:
    return ({
      ...state,
      index: action.index,
    });
  default:
    return state;
  }
}

export default rootReducer;
