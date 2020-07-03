import createStore from './createStore';
import reducer from './reducer';

let initState = {
  count: 0
}
let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(`\n【 state.count 】===>\n`, state.count);
});

store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});

// can not change
store.dispatch({
  count: 'abc'
});
