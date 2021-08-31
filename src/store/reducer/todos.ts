import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from 'store/actions/types';
import { addTodo, toggleTodo, removeTodo } from 'store/actions/todos';

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export type Todo = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
};

export type TodosState = Todo[];

const initialState: TodosState = [
  { id: '1', content: 'todo1', isCheck: false, createdAt: '2021-09-01' },
  { id: '2', content: 'todo2', isCheck: false, createdAt: '2021-09-01' },
  { id: '3', content: 'todo3', isCheck: false, createdAt: '2021-09-01' },
];

function todos(state: TodosState = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        content: action.payload.content,
        isCheck: false,
        createdAt: '2021-08-01',
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isCheck: !todo.isCheck } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
