import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleOption = event => {
    const option = event.target.textContent;
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
