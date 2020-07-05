/**
 * create a store that can: get state/subscribe/change state
 * @param {*} reducer limit change according action type
 * @param {*} initState init state data
 * @param {*} rewriteCreateStoreFunc applyMiddleware result
 */
const createStore = function (reducer, initState, rewriteCreateStoreFunc) {
  if (typeof initState === 'function'){
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }

  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);
  }
  
  let state = initState;
  let listeners = [];

  // get state
  function getState() {
    return state;
  }

  // subscribe
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  // change state --> dispatch
  function dispatch(action) {
    state = reducer(state, action);

    // publish
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  // replaceReducer for lazy load of reducers
  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    // refresh
    dispatch({ type: Symbol() });
  }

  // trigger init data. Dispatch with data that can not match any type.
  dispatch({ type: Symbol() });

  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer,
  };
};

export default createStore;
