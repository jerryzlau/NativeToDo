import { createStore } from 'redux';
import reducer from '../reducer/root_reducer';

const defaultState = {
  todos: []
};

export const configureStore = (initalState=defaultState) => {
  return createStore(reducer, initalState);
};

