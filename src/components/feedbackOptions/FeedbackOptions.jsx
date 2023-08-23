import { Component } from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleOption = e => {
    const option = e.target.textContent;
    onLeaveFeedback(option);
  };

  return (
    <ul className={css.optionsList}>
      {options.map((option, idx) => (
        <li key={idx}>
          <button onClick={handleOption} className={css.optionButton}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
