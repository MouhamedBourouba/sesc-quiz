import React from "react";

const QuizCard = ({
  question,
  options,
  currentIndex,
  totalQuestions,
  onAnswer,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 space-y-6">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded">
        <div
          className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
          style={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
        ></div>
      </div>

      {/* Question */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Question {currentIndex + 1} of {totalQuestions}
        </h2>
        <p className="mt-2 text-gray-600">{question}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-4">
        {Object.values(options).map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-800 focus:ring focus:ring-blue-300 transition duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
