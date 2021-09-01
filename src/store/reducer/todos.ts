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
  error: boolean;
};

const initialState: TodosState = {
  count: 0,
  todoList: [],
  error: false,
};

function todos(state = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        todoList: action.todoList,
        count: action.count,
      };

    case TODO_UPDATE:
      return { ...state, todoList: action.payload };

    case FETCH_FAILURE:
      return { ...state, error: true };

    default:
      return state;
  }
}

export default todos;
