const { CHANGE_SIDEBAR_VISIBILITY } = require("./action-type");

export const sidebarVisible = "sidebarVisible";
const INITIAL_STATE = {
  [sidebarVisible]: undefined,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_SIDEBAR_VISIBILITY:
      return {
        ...state,
        [sidebarVisible]: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
