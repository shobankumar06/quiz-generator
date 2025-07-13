import "./Start.css";

export default function Start({ onStart }) {
  return (
    <div className="start-container">
      <div className="start-box">
        <h1 className="start-title">Welcome to Quiz Generator</h1>
        <p className="start-subtitle">Test your skills in HTML, CSS, JavaScript, React, and more!</p>
        <button className="start-button" onClick={onStart}>Start</button>
      </div>
    </div>
  );
}
