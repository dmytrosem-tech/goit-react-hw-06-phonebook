import types from "./phonebook-types";

const addContact = (cont) => ({
  type: types.ADD,
  payload: cont,
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});
const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
