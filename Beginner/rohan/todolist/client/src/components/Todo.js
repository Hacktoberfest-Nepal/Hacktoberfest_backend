import Axios from 'axios';
import React, { Component } from 'react';
import { Consumer } from '../context/todoState';

export default class Todo extends Component {
  style = () => {
    const { complete } = this.props.todo;
    return {
      textDecoration: complete ? 'line-through' : 'none',
    };
  };

  toggle = (id, dispatch) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  remove = (id, dispatch) => {
    Axios.delete(`/todos/${id}`)
      .then(() => {
        dispatch({ type: 'REMOVE', payload: id });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { title, _id } = this.props.todo;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='text-dark text-center p-1 bg-light border-bottom d-flex justify-content-between px-3 py-2 list-group-item '>
              <h4 className='m-0' style={this.style()}>
                {title}
              </h4>
              <div className='buttons w-25 d-flex justify-content-around'>
                <input
                  type='checkbox'
                  className='m-2 '
                  onChange={this.toggle.bind(this, _id, dispatch)}
                />

                <i
                  style={{ fontSize: '1.1rem' }}
                  className='fas fa-trash-alt fa-sm float-right m-1 text-danger'
                  onClick={this.remove.bind(this, _id, dispatch)}
                ></i>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
