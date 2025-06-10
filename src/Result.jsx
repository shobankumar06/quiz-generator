export default function Result({ score, total, onRestart }) {
  return (
    <div className="result">
      <h2>Quiz Finished!</h2>
      <p>
        You scored {score} out of {total}
      </p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}
