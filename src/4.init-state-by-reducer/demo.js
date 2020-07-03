import createStore from './createStore';
import combineReducers from './combineReducers';
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

// not pass initState param.
const store = createStore(reducer);

// check state
const state = store.getState();
console.log(`\n【 state 】===>\n`, state);
