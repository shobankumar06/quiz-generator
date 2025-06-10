export default function Question({
  data,
  current,
  total,
  selected,
  onSelect,
  onPrev,
  onNext,
  onFinish,
  isLast,
}) {
  return (
    <div className="question">
      <h2>
        Question {current + 1} of {total}
      </h2>
      <p>{data.question}</p>
      <div>
        {data.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            style={{
              backgroundColor: selected === opt ? "#0d6efd" : "#6c757d",
              color: "white",
              marginBottom: "0.5rem",
              display: "block",
              width: "100%",
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="nav-buttons">
        <button className="nav-btn" onClick={onPrev} disabled={current === 0}>
          Prev
        </button>

        {!isLast ? (
          <button className="nav-btn" onClick={onNext} disabled={selected === null}>
            Next
          </button>
        ) : (
          <button className="nav-btn" onClick={onFinish} disabled={selected === null}>
            Finish
          </button>
        )}
      </div>
      </div> 
  );
}
