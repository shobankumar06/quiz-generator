import { useState } from "react";
import { questions } from "./question.js";
import Question from "./Question.jsx";
import Result from "./Result.jsx";
import Start from "./Start.jsx";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleStart = () => setIsStarted(true);

  const handleOptionSelect = (selected) => {
    console.log("Selected option:", selected); 
  setAnswers((prev) => {
    const updated = [...prev];
    updated[current] = selected;
    return updated;
  });
};

  const handleNext = () => {
    console.log("Trying to go next. Current index:", current);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
  };
 const handleRestart = () => {
  setCurrent(0);
  setAnswers(Array(questions.length).fill(null));
  setIsFinished(false);
  setIsStarted(false);
};
  const score = answers.reduce((acc, selected, idx) => {
    return selected === questions[idx].answer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="App">
      {!isStarted ? (
        <Start onStart={handleStart} />
      ) : isFinished ? (
        <Result score={score} total={questions.length} onRestart={handleRestart} />
      ) : (
        <Question
          data={questions[current]}
          current={current}
          total={questions.length}
          selected={answers[current]}
          onSelect={handleOptionSelect}
          onPrev={handlePrev}
          onNext={handleNext}
          onFinish={handleFinish}
          isLast={current === questions.length - 1}
        />
      )}
    </div>
  );
}

export default App;
