import createStore from './createStore';
import combineReducers from './combineReducers';
import applyMiddleware from "./applyMiddleware";
import bindActionCreators from "./bindActionCreators";

import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

import loggerMiddleware from './middlewares/loggerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

const reducer = combineReducers({
  counter: counterReducer,
});

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
// const newCreateStore = rewriteCreateStoreFunc(createStore);
// const store = newCreateStore(reducer);
// const store = createStore(reducer, {}, rewriteCreateStoreFunc);
const store = createStore(reducer, rewriteCreateStoreFunc);

const unsubscribe = store.subscribe(() => {
  console.log(`\n【 state subscribe 】===>\n`, store.getState());
});

store.dispatch({
  type: 'INCREMENT'
});

console.log('\n ========== unsubscribe ==========');
unsubscribe();

store.dispatch({
  type: 'DECREMENT'
});


console.log('\n ========== replaceReducer ==========');
const nextReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});
store.replaceReducer(nextReducer);
console.log(`\n【 state 】===>\n`, store.getState());


// actionCreators
function increment() {
  return {
    type: 'INCREMENT'
  }
}

function setName(name) {
  return {
    type: 'SET_NAME',
    name: name
  }
}

// const actions = {
//   increment: function () {
//     return store.dispatch(increment.apply(this, arguments));
//   },
//   setName: function () {
//     return store.dispatch(setName.apply(this, arguments));
//   }
// }
const actions = bindActionCreators({ increment, setName }, store.dispatch);

console.log('\n ========== action creators ==========');
actions.increment();
actions.setName('Mike');

