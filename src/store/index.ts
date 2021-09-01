import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
