const initState = {
  count: 0,
};

/**
 * @param {*} state totalState.counter
 * @param {*} action { type: string }
 */
export default function counterReducer(state, action) {
  // check state and init
  if (!state) {
    state = initState;
  }

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
