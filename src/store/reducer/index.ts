import { combineReducers, Reducer } from 'redux';
import todos, { TodosAction, TodosState } from './todos';

const rootReducer: Reducer<{ todos: TodosState }, TodosAction> = combineReducers({ todos });

export default rootReducer;
