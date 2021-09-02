import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import {
  ADD_TODO,
  EDIT_TODO,
  FETCH_TODOS,
  TOGGLE_TODO,
  REMOVE_TODO,
  TodoTypes,
} from 'store/actions/types';

export const useTodo = () => {
  const { todoList, loading } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  function onFetch() {
    dispatch({ type: FETCH_TODOS });
  }

  function onAdd(content: string) {
    dispatch({ type: ADD_TODO, prevTodoList: todoList, content });
  }

  function onEdit(content: string, todo: TodoTypes, callback: () => void) {
    dispatch({ type: EDIT_TODO, prevTodoList: todoList, todo: { ...todo, content } });
    callback();
  }

  function onToggle(todo: TodoTypes) {
    dispatch({ type: TOGGLE_TODO, prevTodoList: todoList, todo: todo });
  }

  function onRemove(todo: TodoTypes) {
    dispatch({ type: REMOVE_TODO, prevTodoList: todoList, todo });
  }

  return { todoList, loading, onFetch, onAdd, onEdit, onToggle, onRemove };
};
