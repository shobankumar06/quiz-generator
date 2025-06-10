import './start.css'
export default function Start({ onStart }) {
  return (
    <div className="start-container">
      <div className="start-box">
        <h1 className="start-title">Welcome to the Quiz App!</h1>
        <button className="start-button" onClick={onStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
