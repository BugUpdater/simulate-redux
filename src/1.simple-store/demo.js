import createStore from './createStore';

const initState = {
  counter: {
    count: 0
  },
  info: {
    name: 'unknown',
    description: 'no description'
  }
};

// create
let store = createStore(initState);

// subscribe
store.subscribe(() => {
  let state = store.getState();
  console.log(`\n【 state.counter.count 】===>\n`, state.counter.count);
});
store.subscribe(() => {
  let state = store.getState();
  console.log(`\n【 state.info 】===>\n`, state.info);
});

// change state
store.changeState({
  ...store.getState(),
  counter: {
    count: 1
  },
});
store.changeState({
  ...store.getState(),
  info: {
    name: 'Mike',
    description: 'A programmer.'
  },
});
