import { createStore } from 'react-redux';
import rootReducer from '../reducer/index';

const store = createStore(rootReducer);

export default store;
