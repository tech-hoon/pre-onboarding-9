import { FETCH_SUCCESS, TODO_UPDATE, FETCH_FAILURE, TodoTypes } from './types';

export const fetchSuccess = (todoList: TodoTypes[], count: number) => ({
  type: FETCH_SUCCESS,
  todoList,
  count,
});

export const fetchFailure = (msg: string) => ({
  type: FETCH_FAILURE,
  payload: msg,
});

export const updateTodo = (todoList: TodoTypes[]) => ({
  type: TODO_UPDATE,
  payload: todoList,
});
