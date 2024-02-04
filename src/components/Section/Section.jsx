import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, children }) => {
  const [isRendered, setIsRendered] = useState(false);

  if (!isRendered) {
    console.log('Section component has been rendered');
    setIsRendered(true);
  }

  return (
    <div className="section_wrap">
      <h2 className="section_title">{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
