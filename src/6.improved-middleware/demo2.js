import createStore from './createStore';
import combineReducers from './combineReducers';
import applyMiddleware from "./applyMiddleware";

import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

import loggerMiddleware from './middlewares/loggerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
// const newCreateStore = rewriteCreateStoreFunc(createStore);
// const store = newCreateStore(reducer);
const store = createStore(reducer, {}, rewriteCreateStoreFunc);

store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
