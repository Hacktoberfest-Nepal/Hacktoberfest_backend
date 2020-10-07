import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        todos: prevState.todos.map((todo) => {
          if (todo._id === action.payload) {
            todo.complete = !todo.complete;
          }

          return todo;
        }),
      };

    case 'REMOVE':
      return {
        todos: prevState.todos.filter((todo) => todo._id !== action.payload),
      };

    case 'ADD':
      return {
        todos: [...prevState.todos, action.payload],
      };
    default:
      return prevState;
  }
};

export class Provider extends Component {
  state = {
    todos: [],
    dispatch: (action) =>
      this.setState((prevState) => reducer(prevState, action)),
  };

  componentDidMount() {
    axios
      .get('/todo')
      .then((res) => this.setState({ todos: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
