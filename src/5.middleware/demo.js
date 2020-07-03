import createStore from './createStore';
import combineReducers from './combineReducers';

import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

const store = createStore(reducer);

// loggerMiddleware
const next = store.dispatch;
store.dispatch = (action) => {
  console.log(`\n【 state before 】===>\n`, store.getState());
  console.log(`\n【 action 】===>\n`, action);
  next(action);
  console.log(`\n【 state after 】===>\n`, store.getState());
};

store.dispatch({
  type: 'INCREMENT'
});


// exceptionMiddleware
store.dispatch = (action) => {
  try {
    next(action);
  } catch (err) {
    console.error('error: ', err);
  }
};


// multiple middlewares
store.dispatch = (action) => {
  try {
    console.log(`\n【 state before 】===>\n`, store.getState());
    console.log(`\n【 action 】===>\n`, action);
    next(action);
    console.log(`\n【 state after 】===>\n`, store.getState());
  } catch (err) {
    console.error('error: ', err);
  }
}

// multiple middlewares --> more extensible
const loggerMiddleware = (next) => (action) => {
  console.log(`\n【 state before 】===>\n`, store.getState());
  console.log(`\n【 action 】===>\n`, action);
  next(action);
  console.log(`\n【 state after 】===>\n`, store.getState());
};

const exceptionMiddleware = (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    console.error('error: ', err);
  }
};

store.dispatch = exceptionMiddleware(loggerMiddleware(next));

console.log("\n ========== multiple middlewares ==========");
store.dispatch({
  type: 'INCREMENT'
});
