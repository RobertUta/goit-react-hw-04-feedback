import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleClick = option => {
    onLeaveFeedback(option);
  };

  useEffect(() => {
    const logClick = () => console.log('A button was clicked');
    document.addEventListener('click', logClick);
    return () => {
      document.removeEventListener('click', logClick);
    };
  }, []);

  return (
    <div className="container">
      <div className="wrap">
        {options.map(option => (
          <button
            className="btn"
            key={option}
            type="button"
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
