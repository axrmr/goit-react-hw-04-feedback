import { useState } from 'react';
import './App.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import ReactLogo from './ReactLogo/ReactLogo';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
    const [feedbackOption, setFeedbackOption] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const handleClick = type => {
        setFeedbackOption(prev => ({
            ...prev,
            [type]: prev[type] + 1,
        }));
    };

    const countTotalFeedback = (...args) => {
        return args.reduce((prev, next) => prev + next);
    };

    const countPositiveFeedbackPercentage = (good, neutral, bad) => {
        return `${((good / (good + neutral + bad)) * 100).toFixed()}%`;
    };

    const { good, neutral, bad } = feedbackOption;
    const total = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedbackPercentage(
        good,
        neutral,
        bad
    );

    return (
        <>
            <ReactLogo />
            <Section title='Leave feedback!'>
                <FeedbackOptions onClick={handleClick} />
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
};

export default App;
