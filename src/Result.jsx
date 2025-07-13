import "./Result.css";

export default function Result({ score, total, onRestart, subject }) {
  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="result">
      <h2>{subject} Quiz Result</h2>
      <p>
        You scored {score} out of {total} ({percentage}%)
      </p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
