import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './types';

let nextId = 1;

// 액션 생성 함수
export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: {
    id: String(nextId++),
    content,
    isCheck: false,
    createdAt: '2021-05-13',
  },
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});
