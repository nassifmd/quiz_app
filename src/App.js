import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container mx-auto mt-10 text-center max-w-lg">
      {showScore ? (
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <div className="text-2xl font-bold mb-4">
            Your Score: {score} out of {questions.length}
          </div>
          <button
            onClick={handleRestart}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="text-7xl font-bold mb-4">
            Quiz Game
          </div>
          <div className="text-xl font-bold mb-4">
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className="bg-gray-100 p-6 mb-4 rounded-md shadow-md">
            <div className="text-2xl mb-4">{questions[currentQuestion].question}</div>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
