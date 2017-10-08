export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = text => {
  return{
    type: 'RECEIVE_TODO',
    text
  };
};

export const deleteTodo = id => {
  return{
    type: 'REMOVE_TODO',
    id
  };
};

