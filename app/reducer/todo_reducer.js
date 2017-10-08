import {RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import uuid from 'uuid';

const TodoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newTodos;
  switch(action.type){
    case RECEIVE_TODO:
      newTodos = [
        ...state.todos, 
        {
          text: action.text,
          id: uuid.v4()
        }
      ];
      return {
        todos: newTodos
      };
    case REMOVE_TODO: 
      newTodos = state.todos.filter((todo) => {
        if (todo.id === action.id){
          return false; 
        }
        return true;
      });

      return{
        todos: newTodos
      };
    default:
      return state;
  }
};

export default TodoReducer;
