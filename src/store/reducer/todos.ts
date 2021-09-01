import { TODO_UPDATE, FETCH_SUCCESS, FETCH_FAILURE } from 'store/actions/types';
import { fetchSuccess, fetchFailure, updateTodo } from 'store/actions/todos';
import { TodoTypes } from 'store/actions/types';

export type TodosAction =
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchFailure>
  | ReturnType<typeof updateTodo>;

export type TodosState = {
  msg: string;
  todoList: TodoTypes[];
  error: boolean;
};

const initialState: TodosState = {
  msg: '',
  todoList: [],
  error: false,
};

function todos(state = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, msg: '아이템을 불러왔습니다', todoList: action.payload };

    case TODO_UPDATE:
      return { ...state, msg: '아이템이 업데이트 되었습니다', todoList: action.payload };

    case FETCH_FAILURE:
      return { ...state, msg: action.payload, error: true };

    default:
      return state;
  }
}

export default todos;
