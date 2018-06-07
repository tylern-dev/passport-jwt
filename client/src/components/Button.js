import React from 'react';

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{`${label[0].toUpperCase()}${label.substr(1)}`}</button>
);

export default Button;
