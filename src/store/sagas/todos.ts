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
import { call, put, takeLatest } from 'redux-saga/effects';
import { getFetchTodos, postAddTodo, postRemoveTodo, postToggleTodo } from 'api/fetch';
import { currentDate } from 'utils/date';
import nextID from 'utils/nextID';

function* fetchTodos(): any {
  try {
    const request = yield call(getFetchTodos, `/todo`);
    const { todoList, count } = request;
    yield put({ type: FETCH_SUCCESS, todoList, count }); // redux store

    console.log('%c response: GET /todo', 'color:blue'); // res msg
    console.log('%c request:', 'color:green', request); // req msg
  } catch (error) {
    yield put({ type: FETCH_FAILURE, payload: error });
  }
}

function* addTodo({ prevTodoList, content }: any): any {
  const todo: TodoTypes = {
    id: nextID(prevTodoList),
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

    // res, req msg
    console.log('%c response: GET /todo 생성', 'color:blue');
    console.log(
      `%c request: { msg: 아이템 "${newTodo.content}"이(가) 생성되었습니다. }`,
      'color:green'
    );
  } catch (e) {
    console.log(e);
  }
}

function* removeTodo({ prevTodoList, todo: { id, content } }: any): any {
  try {
    yield call(postRemoveTodo, `/todo/${id}`); // API POST
    const newArr = prevTodoList.filter((item: TodoTypes) => item.id !== id);
    yield put({ type: TODO_UPDATE, payload: newArr }); // redux store

    // res, req msg
    console.log('%c response: POST /todo 삭제', 'color:blue');
    console.log(`%c request: { msg: 아이템 "${content}"이(가) 삭제되었습니다. }`, 'color:green');
  } catch (e) {
    console.log(e);
  }
}

function* toggleTodo({ prevTodoList, todo }: any): any {
  const { id, content, isCheck } = todo;

  try {
    yield call(postToggleTodo, `/todo/${id}`, { ...todo, isCheck: !isCheck }); // API POST
    const newArr = prevTodoList.map((item: TodoTypes) =>
      item.id === id ? { ...item, isCheck: !item.isCheck } : item
    );
    yield put({ type: TODO_UPDATE, payload: newArr }); // redux store

    // res, req msg
    console.log('%c response: POST /todo 체크', 'color:blue');
    console.log(
      `%c request: { msg: 아이템 "${content}"의 체크가 ${isCheck}로 변경되었습니다. }`,
      'color:green'
    );
  } catch (e) {
    console.log(e);
  }
}

function* editTodo({ prevTodoList, todo }: any): any {
  const { id, content } = todo;

  try {
    yield call(postToggleTodo, `/todo/${id}`, { ...todo, content: content }); // API POST
    const newArr = prevTodoList.map((item: TodoTypes) =>
      item.id === id ? { ...item, content: content } : item
    );
    yield put({ type: TODO_UPDATE, payload: newArr }); // redux store

    // res, req msg
    console.log('%c response: POST /todo 수정', 'color:blue');
    console.log(
      `%c request: { msg: 아이템 내용이 "${content}"(으)로 수정되었습니다. }`,
      'color:green'
    );
  } catch (e) {
    console.log(e);
  }
}

export function* todosSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodos);
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(REMOVE_TODO, removeTodo);
  yield takeLatest(TOGGLE_TODO, toggleTodo);
  yield takeLatest(EDIT_TODO, editTodo);
}
