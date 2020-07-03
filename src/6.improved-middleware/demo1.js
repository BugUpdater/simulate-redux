import createStore from './createStore';
import combineReducers from './combineReducers';
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

import loggerMiddleware from './middlewares/loggerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

const store = createStore(reducer);
const next = store.dispatch;

// add store input to seperate middleware from store
const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));

store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
