import {
  TodoTypes,
  FETCH_TODOS,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  TODO_UPDATE,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from '../actions/types';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getFetchTodos, postAddTodo, postRemoveTodo, postToggleTodo } from 'api/fetch';
import { currentDate } from 'utils/date';

function* fetchTodos(): any {
  try {
    const result = yield call(getFetchTodos, `/todo`);
    yield put({ type: FETCH_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: FETCH_FAILURE, payload: error });
  }
}

export function* addTodo({ prevTodoList, content }: any): any {
  const todo: TodoTypes = {
    id: '',
    content: content,
    isCheck: false,
    createdAt: currentDate(),
  };

  try {
    const newTodo = yield call(postAddTodo, `/todo`, todo); // API POST
    yield put({
      type: TODO_UPDATE,
      payload: [...prevTodoList, newTodo],
    }); // redux store
  } catch (e) {
    console.log(e);
  }
}

export function* removeTodo({ prevTodoList, todo: { id } }: any): any {
  try {
    yield call(postRemoveTodo, `/todo/${id}`); // API POST
    const newArr = prevTodoList.filter((item: TodoTypes) => item.id !== id);
    yield put({ type: TODO_UPDATE, payload: newArr }); // redux store
  } catch (e) {
    console.log(e);
  }
}

export function* toggleTodo({ prevTodoList, todo }: any): any {
  const { id, isCheck } = todo;

  try {
    yield call(postToggleTodo, `/todo/${id}`, { ...todo, isCheck: !isCheck }); // API POST
    const newArr = prevTodoList.map((item: TodoTypes) =>
      item.id === id ? { ...item, isCheck: !item.isCheck } : item
    );

    yield put({ type: TODO_UPDATE, payload: newArr }); // redux store
  } catch (e) {
    console.log(e);
  }
}

export function* editTodo({ prevTodoList, todo }: any): any {
  const { id, content } = todo;

  try {
    yield call(postToggleTodo, `/todo/${id}`, { ...todo, content: content }); // API POST
    const newArr = prevTodoList.map((item: TodoTypes) =>
      item.id === id ? { ...item, content: content } : item
    );

    yield put({ type: TODO_UPDATE, payload: newArr }); // redux store
  } catch (e) {
    console.log(e);
  }
}

export function* todosSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodos);
  yield takeEvery(ADD_TODO, addTodo);
  yield takeEvery(REMOVE_TODO, removeTodo);
  yield takeEvery(TOGGLE_TODO, toggleTodo);
  yield takeEvery(EDIT_TODO, editTodo);
}
