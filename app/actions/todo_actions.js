export const RECEIVE_TODO = 'RECEIVE_TODO';

export const addTodo = text => {
  return{
    type: 'RECEIVE_TODO',
    text
  };
};

