import React from 'react';
import PropTypes from 'prop-types';

const Error = props => (
  <span>{props.error}</span>
);

Error.propTypes = {
  error: PropTypes.string,
};


export default Error;
