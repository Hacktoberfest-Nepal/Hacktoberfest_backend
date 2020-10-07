import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import { Header } from './components/Header';
import Todos from './components/Todos';
import { Provider } from './context/todoState';

function App() {
  return (
    <Provider>
      <Header />
      <div className='container'>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
