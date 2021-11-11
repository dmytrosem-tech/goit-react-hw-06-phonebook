import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./Phonebook/phonebook-reducer";

// const rootReducer = combineReducers({
//   phonebookContacts: contactsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    phonebookContacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
