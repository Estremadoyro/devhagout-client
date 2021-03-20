import { SET_ALERT, REMOVE_ALERT } from "../action-types/types";

const initialState = [];

export const alertsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      //payload = data sent in the action, returns  all alerts but the id of the one sent
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
