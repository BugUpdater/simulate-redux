/**
 * create a store that can: get state/subscribe/change state
 * @param {*} reducer limit change according action type
 * @param {*} initState init state data
 */
const createStore = function (reducer, initState) {
  let state = initState;
  let listeners = [];

  // get state
  function getState() {
    return state;
  }

  // subscribe
  function subscribe(listener) {
    listeners.push(listener);
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

  return {
    getState,
    subscribe,
    dispatch,
  };
};

export default createStore;
