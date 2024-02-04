import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './CustomNotification';

const CustomNotification = ({ message }) => {
  useEffect(() => {
    console.log('CustomNotification component has been rendered');
  }, []);

  return <p className="notification_text">{message}</p>;
};

CustomNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomNotification;
