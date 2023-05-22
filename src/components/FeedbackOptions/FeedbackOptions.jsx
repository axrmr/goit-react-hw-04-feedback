const FEEDBACK_TYPE = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
};

const FeedbackOptions = ({ onClick }) => {
    return (
        <div>
            <button onClick={() => onClick(FEEDBACK_TYPE.good)}>Good</button>
            <button onClick={() => onClick(FEEDBACK_TYPE.neutral)}>
                Neutral
            </button>
            <button onClick={() => onClick(FEEDBACK_TYPE.bad)}>Bad</button>
        </div>
    );
};

export default FeedbackOptions;
