import { connect } from "react-redux";
import phoneBookActions from "../../redux/Phonebook/phonebook-actions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ filter, onChange1 }) {
  const { box, input } = styles;
  return (
    <div className={box}>
      {" "}
      Find contacts by name:
      <input
        className={input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange1}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange1: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filter: state.phonebookContacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange1: (e) => dispatch(phoneBookActions.changeFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
