import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={styles.contacts__list}>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
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
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
