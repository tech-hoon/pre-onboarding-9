import { TODO_UPDATE, FETCH_SUCCESS, FETCH_FAILURE } from 'store/actions/types';
import { fetchSuccess, fetchFailure, updateTodo } from 'store/actions/todos';
import { TodoTypes } from 'store/actions/types';

export type TodosAction =
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchFailure>
  | ReturnType<typeof updateTodo>;

export type TodosState = {
  count: number;
  todoList: TodoTypes[];
  loading: boolean;
  error: boolean;
};

const initialState: TodosState = {
  count: 0,
  todoList: [],
  loading: true,
  error: false,
};

function todos(state = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: action.todoList,
        count: action.count,
      };

    case TODO_UPDATE:
      return { ...state, loading: false, todoList: action.payload };

    case FETCH_FAILURE:
      return { ...state, loading: false, todoList: [], error: true };

    default:
      return state;
  }
}

export default todos;
