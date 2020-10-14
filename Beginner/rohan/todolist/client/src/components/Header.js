import React from 'react';

let display = window.innerWidth < 550 ? 'display-5 py-2 ' : 'display-4 py-2';

export const Header = () => {
  return (
    <div className='card bg-info text-center text-light rounded-0'>
      <h1 className={display}>
        <i className='fas fa-clipboard-list mr-3'></i>
        <span className='text-dark mr-3 font-weight-bold'>MERN</span>
        Todo List
      </h1>
    </div>
  );
};
