import React from 'react';

export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/todos',
    datatype: 'json',
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: { todo },
    datatype: 'json',
  });
};
