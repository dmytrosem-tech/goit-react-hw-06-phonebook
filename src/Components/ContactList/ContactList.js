import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";

function ContactList({ contacts, filter }) {
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul className={styles.contacts__list}>
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

const mapStateToProps = (state) => ({
  contacts: state.phonebookContacts.contacts,
  filter: state.phonebookContacts.filter,
});

export default connect(mapStateToProps, null)(ContactList);
