/**
 * @param {*} state totalState.info
 * @param {*} action { type: string, name?: string, description?: string }
 */
export default function infoReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
};
