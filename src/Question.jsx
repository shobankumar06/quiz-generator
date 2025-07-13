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
            className={`option-btn ${selected === opt ? "selected" : ""}`}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button
          className="nav-btn"
          onClick={onPrev}
          disabled={current === 0}
        >
          Prev
        </button>

        {!isLast ? (
          <button
            className="nav-btn"
            onClick={onNext}
            disabled={selected === null}
          >
            Next
          </button>
        ) : (
          <button
            className="nav-btn"
            onClick={onFinish}
            disabled={selected === null}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}
