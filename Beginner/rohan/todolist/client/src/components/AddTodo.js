import React, { Component } from 'react';
import { Consumer } from '../context/todoState';
import axios from 'axios';

export default class AddTodo extends Component {
  state = {
    id: 4,
    title: '',
    complete: false,
  };

  update = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  add = (dispatch, e) => {
    e.preventDefault();
    if (this.state.title !== '') {
      const newTodo = this.state;
      axios.post('/todo', newTodo).then((res) => {
        dispatch({ type: 'ADD', payload: res.data });
      });
      this.setState({ title: '' });
    } else {
      alert('Please enter your todo!!!');
    }
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <form onSubmit={this.add.bind(this, dispatch)}>
              <div className='input-group my-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Write your todo here...'
                  aria-label='Write your todo here...'
                  aria-describedby='button-addon2'
                  onChange={this.update}
                  value={this.state.title}
                />
                <div className='input-group-append'>
                  <button
                    type='submit'
                    className='btn btn-secondary'
                    id='button-addon2'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
