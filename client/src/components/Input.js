import React, { Fragment } from 'react';

const Input = ({
  type,
  name,
  onChange,
  label,
  value,
}) => (

  <Fragment>
    <label htmlFor={name}>{`${label[0].toUpperCase()}${label.substr(1)}:`}</label>
    <input id={name} type={type} name={name} onChange={onChange} value={value} />
  </Fragment>
);


export default Input;
