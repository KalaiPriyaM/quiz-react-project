import React, { useState, useEffect } from "react";
import { quizData } from "../components/quizData";

const MainQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [questions, setQuestions] = useState("");
  const [answer, setAnswer] = useState("");

  const loadQuizData = () => {
    setQuestions(quizData[currentQuestion].question);
    setAnswer(quizData[currentQuestion].answer);
    setOptions(quizData[currentQuestion].options);
  };

  useEffect(() => {
    loadQuizData();
  }, [currentQuestion]);

  const nextQuestionHandler = () => {
    if (myAnswer === answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    setDisabled(true);
    setQuestions(quizData[currentQuestion].question);
    setOptions(quizData[currentQuestion].options);
    setAnswer(quizData[currentQuestion].answer);
  }, [currentQuestion]);

  const checkAnswer = (selectedAnswer) => {
    setMyAnswer(selectedAnswer);
    setDisabled(false);
  };

  const finishHandler = () => {
    if (currentQuestion === quizData.length - 1) {
      setIsEnd(true);
    }
    if (myAnswer === answer) {
      setScore(score + 1);
    }
  };

  if (isEnd) {
    return (
      <div>
        <div className="result">
          <h3>Game Over your Final score is {score} points </h3>
          <div>
            The correct answer's for the questions was
            <ul>
              {quizData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="App">
          <h1>{questions} </h1>
          <span>{`Questions ${currentQuestion}  out of ${quizData.length - 1} remaining `}</span>
          {options.map((option) => (
            <p
              key={option.id}
              className={`ui floating message options ${myAnswer === option ? "selected" : null}`}
              onClick={() => checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < quizData.length - 1 && (
            <button className="button" disabled={disabled} onClick={nextQuestionHandler}>
              Next
            </button>
          )}
          {currentQuestion === quizData.length - 1 && (
            <button className="button" onClick={finishHandler}>
              Finish
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default MainQuiz;
