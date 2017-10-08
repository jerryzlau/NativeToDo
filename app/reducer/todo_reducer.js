import {RECEIVE_TODO} from '../actions/todo_actions';
import uuid from 'uuid';

const TodoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODO:
      let newTodos = [
        ...state.todos, 
        {
          text: action.text,
          id: uuid.v4()
        }
      ];

      return {
        todos: newTodos
      };
    default:
      return state;
  }
};

export default TodoReducer;
