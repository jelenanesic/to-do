import { ADD_TODO, DELETE_TODO, CLEAR_TODOS } from '../constants';

const todo = (action) => {
  return {
    text: action.text,
    dueDate: action.dueDate,
    id: Math.random()
  }
}

// for: DELETE_TODO
const removeById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  console.log('new reduced todos:', todos);
  return todos;
}

const todos = (state = [], action) => {
  let todos = null;
  
  switch(action.type) {
    case ADD_TODO:
      todos = [...state, todo(action)];
      return todos;
    case DELETE_TODO:
      todos = removeById(state, action.id);
      return todos;
    case CLEAR_TODOS:
      todos = [];
      return todos;
    default:
      return state;
  }
}

export default todos;