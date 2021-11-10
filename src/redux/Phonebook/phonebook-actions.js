import types from "./phonebook-types";

const addContact = (cont) => ({
  type: types.ADD,
  payload: cont,
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});
const changeFilter = (e) => ({
  type: types.CHANGE_FILTER,
  payload: e,
});

export default { addContact, deleteContact, changeFilter };

// import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/Add");
// export const deleteContact = createAction("contacts/Delete");
// export const changeFilter = createAction("contacts/ChangeFilter");
