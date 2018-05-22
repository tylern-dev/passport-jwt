import React from 'react';
import PropTypes from 'prop-types';

const InputField = props => (
  <label htmlFor={props.for}>{props.label}:
    <input type={props.type} id={props.for} name={props.for} onChange={props.onChange} size={props.size} />
  </label>
);

InputField.propTypes = {
  for: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  onChange: PropTypes.func,
};


export default InputField;
