import { useState } from "react";
import  question  from "./question.js";
import SubjectSelector from "./SubjectSelector";
import Question from "./Question.jsx";
import Result from "./Result";
import Start from "./Start";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);

  const handleWelcomeStart = () => setHasWelcomed(true);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setQuestions(question[subject]);
    setAnswers(Array(question[subject].length).fill(null));
    setIsStarted(true);
  };

  const handleOptionSelect = (selected) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[current] = selected;
      return updated;
    });
  };

  const handleNext = () => {
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
    setIsStarted(true);
  };

  const handleGoHome = () => {
    setCurrent(0);
    setAnswers([]);
    setIsFinished(false);
    setIsStarted(false);
    setSelectedSubject(null);
    setHasWelcomed(false);
  };

  const score = answers.reduce((acc, selected, idx) => {
    return selected === questions[idx]?.answer ? acc + 1 : acc;
  }, 0);

  // 🔥 Add this flag
  const showHomeButton = !isStarted || isFinished;

  return (
    <div className="App">
      <Navbar onGoHome={handleGoHome} showHomeButton={showHomeButton} />
      {!hasWelcomed ? (
        <Start onStart={handleWelcomeStart} />
      ) : !selectedSubject ? (
        <SubjectSelector onSelect={handleSubjectSelect} />
      ) : isFinished ? (
        <Result
          score={score}
          total={questions.length}
          onRestart={handleRestart}
          subject={selectedSubject}
        />
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
