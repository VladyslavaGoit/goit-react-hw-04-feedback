import { useReducer } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';

function reducer(prevState, action) {
  return {
    ...prevState,
    [action.type]: prevState[action.type] + action.payload,
  };
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => dispatch({ type: option, payload: 1 });

  const totalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    const { good } = state;
    const total = totalFeedback();
    const percent = Math.round((good / total) * 100);
    return percent;
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback() > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
export default App;
