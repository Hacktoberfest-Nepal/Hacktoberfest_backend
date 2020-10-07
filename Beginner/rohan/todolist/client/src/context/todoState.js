import React, { Component } from 'react';
import axios from 'axios';
import { reducer } from './todoReducer';

const Context = React.createContext();

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
