export const ADD_TODO = 'todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
export const EDIT_TODO = 'todos/EDIT_TODO' as const;

export const FETCH_TODOS = 'todos/FETCH_TODOS' as const;
export const FETCH_SUCCESS = 'todos/FETCH_SUCCESS' as const;
export const FETCH_FAILURE = 'todos/FETCH_FAILURE' as const;

export const TODO_UPDATE = 'todos/TODO_UPDATE' as const;

export type TodoTypes = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
};
