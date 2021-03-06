import * as APIUtil from '../util/todo_api_util';
import thunk from '../middleware/thunk';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TODO_ERROR = "TODO_ERROR";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
});

export const fetchTodos = () => {
  return function (dispatch){
    APIUtil.fetchTodos().then( (res) => dispatch(receiveTodos(res)));
  };
};

export const createTodo = (todo) => {
  return function (dispatch) {
    APIUtil.createTodo(todo).then( (res) => dispatch(receiveTodo(res)));
  };
};
