/**
 * create a store that can: get state/subscribe/change state
 * @param {*} initState init state data
 */
const createStore = function (initState) {
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

  // change state
  function changeState(newState) {
    state = newState;

    // publish
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  return {
    getState,
    subscribe,
    changeState,
  };
};

export default createStore;
