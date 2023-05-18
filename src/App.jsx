import { Component } from 'react';
import './App.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import ReactLogo from './ReactLogo/ReactLogo';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prev => ({
      [type]: prev[type] + 1,
    }));
  };

  countTotalFeedback = (...args) => {
    return args.reduce((prev, next) => prev + next);
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return ((good / (good + neutral + bad)) * 100).toFixed() + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );

    return (
      <>
        <ReactLogo />
        <Section title='Leave feedback!'>
          <FeedbackOptions onClick={this.handleClick} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
