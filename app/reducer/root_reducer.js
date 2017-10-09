// import session from './session_reducer';
import {reducer as formReducer} from 'redux-form';
import todo from './todo_reducer';
import {combinReducer} from 'redux';

const RootReducer = combinReducer({
  entities: {
    todo
  },
  form: formReducer
});

export default RootReducer;