import { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import { Notification } from "./notification/Notification";
import { Section } from "./section/Section";
import {Statistics} from "./statistics/Statistics";



class App extends Component {
      state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state
    return good + bad + neutral
    }
    
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state
    const total = this.countTotalFeedback()
    const percent = Math.round((good/total)*100)
    return percent
    }

  render() {
      const {good, neutral, bad} = this.state
    return (
    <div>
    <Section title={'Please leave feedback'}>
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback} />
    </Section>
    <Section title={'Statistics'}>
    {this.countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) : <Notification message="There is no feedback" />}
      </Section>
    </div>
  );
  }
}
export default App
