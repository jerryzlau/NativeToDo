import { createStore, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from '../reducer/todo_reducer';

const defaultState = {
  todos: []
};

export const configureStore = (initalState=defaultState) => {
  let store = createStore(reducer, initalState, compose(
    autoRehydrate()
  ));

  persistStore(store, {storage: AsyncStorage});
  return store;
};

