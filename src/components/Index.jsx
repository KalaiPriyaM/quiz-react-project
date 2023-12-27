import React, { useState, useEffect } from "react";
import { quizData } from "../components/quizData";

function MainQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
    }
  };

  const showScore = () => {
    return (
      <div>
        <p>Your final score is {score} out of {quizData.length}!</p>
        <button onClick={startQuiz}>Play Again</button>
      </div>
    );
  };

  const handleNextButton = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null); // Reset selected option for the next question
  };

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  const showQuestion = () => {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answers.find(answer => answer.correct);

    return (
      <div>
        <h2>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.answers.map((answer, index) => (
            <div key={index}>
              <h2
                onClick={() => handleOptionClick(answer)}
                className={
                  selectedOption && answer.correct
                    ? 'correct'
                    : selectedOption === answer
                    ? 'incorrect'
                    : ''
                }
              >
                {answer.text}
              </h2>
            </div>
          ))}
        </ul>
        {selectedOption && (
          <div>
            <p>
              {isCorrect
                ? 'Correct!'
                : 'Wrong! The correct answer is ' +
                  currentQuestion.answers.find((answer) => answer.correct).text}
            </p>
            <button onClick={handleNextButton} disabled={currentQuestionIndex === quizData.length - 1}>
              Next Question
            </button>
          </div>
        )}
      </div>
    );
  };

  // Initial render
  return (
    <div className='App'>
      {currentQuestionIndex < quizData.length ? showQuestion() : showScore()}
    </div>
  );
}


export default MainQuiz;
