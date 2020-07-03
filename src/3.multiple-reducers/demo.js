import createStore from './createStore';
import combineReducers from './combineReducers';

import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer,
});

const initState = {
  counter: {
    count: 0,
  },
  info: {
    name: 'unknown',
    description: 'no description',
  }
};

const store = createStore(reducer, initState);

store.subscribe(() => {
  const state = store.getState();
  console.log(`\n【 state.counter.count 】===>\n`, state.counter.count);
  console.log(`\n【 state.info 】===>\n`, state.info);
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'SET_NAME',
  name: 'Mike'
});

store.dispatch({
  type: 'SET_DESCRIPTION',
  description: 'A programmer.'
});
