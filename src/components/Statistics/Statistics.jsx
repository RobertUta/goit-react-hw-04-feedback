import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total }) => {
  const positivePercentage = useMemo(() => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }, [good, total]);

  useEffect(() => {
    console.log('Statistics component has been rendered');
  }, []);

  return (
    <>
      <p className="text_good">Good: {good}</p>
      <p className="text_neutral">Neutral: {neutral}</p>
      <p className="text_bad">Bad: {bad}</p>
      <p className="text_total">Total: {total}</p>
      <p className="text_feedback">Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
