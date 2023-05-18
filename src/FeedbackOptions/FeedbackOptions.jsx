const FeedbackOptions = ({ onClick }) => {
  const type = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  return (
    <div>
      <button onClick={() => onClick(type.good)}>Good</button>
      <button onClick={() => onClick(type.neutral)}>Neutral</button>
      <button onClick={() => onClick(type.bad)}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
