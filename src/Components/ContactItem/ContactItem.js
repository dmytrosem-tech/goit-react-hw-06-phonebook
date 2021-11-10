import { connect } from "react-redux";
import phoneBookActions from "../../redux/Phonebook/phonebook-actions";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

function ContactItem({ name, number, deleteContact, id }) {
  const { contacts__item, contact__name, contact__number, contacts__btn } =
    styles;
  return (
    <li id={id} className={contacts__item}>
      <p className={contact__name}>{name}</p>
      <p className={contact__number}>tel: {number}</p>
      <button onClick={() => deleteContact(id)} className={contacts__btn}>
        Delete contact
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
  id: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(phoneBookActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
