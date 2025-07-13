import "./SubjectSelector.css";

export default function SubjectSelector({ onSelect }) {
  const subjects = [
    { name: "html", img: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
    { name: "css", img: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
    { name: "javascript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "react", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  ];

  return (
    <div className="subject-container">
      <div className="subject-card">
        <h2>Select Subject</h2>
        <p>Choose a topic to begin your quiz.</p>
        <div className="subject-buttons">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="subject-option"
              onClick={() => onSelect(subject.name)}
            >
              <img src={subject.img} alt={subject.name} />
              <span>{subject.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
