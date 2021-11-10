import { combineReducers } from "redux";
import types from "./phonebook-types";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (state.some(({ name }) => name === payload.name)) {
        alert(`Sorry, contact is already in contacts list`);
        return state;
      }
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return (state = payload.target.value);
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});

// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, changeFilter } from "./timerActions";

// export default createReducer([], {
//   [addContact]: (state, action) => {
//     if (state.some(({ name }) => name === action.payload.name)) {
//       alert(`Sorry, contact is already in contacts list`);
//       return state;
//     }
//     return [...state, action.payload];
//   },
//   [deleteContact]: (state, action) => state.filter(({ id }) => id !== action.payload),
// });
