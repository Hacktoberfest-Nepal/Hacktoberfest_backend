import { ADD, REMOVE, TOGGLE } from './types';

export const reducer = (prevState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        todos: prevState.todos.map((todo) => {
          if (todo._id === action.payload) {
            todo.complete = !todo.complete;
          }

          return todo;
        }),
      };

    case REMOVE:
      return {
        todos: prevState.todos.filter((todo) => todo._id !== action.payload),
      };

    case ADD:
      return {
        todos: [...prevState.todos, action.payload],
      };
    default:
      return prevState;
  }
};
