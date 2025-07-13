import "./Navbar.css";

export default function Navbar({ onGoHome, showHomeButton }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Quiz Generator</h1>
      {showHomeButton && (
        <button onClick={onGoHome} className="navbar-button">
          Home
        </button>
      )}
    </nav>
  );
}
