import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { fetchTodos } from './actions/todo_actions';
import thunk from './middleware/thunk';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  // window.store = store;
  // window.fetchTodos = fetchTodos;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
