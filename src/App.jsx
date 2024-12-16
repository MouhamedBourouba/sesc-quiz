import './App.css'
import React from "react";
import QuizCard from './components/QuizCard/QuizCard';
import { q1, q2 } from "./data"

function App() {
  return (
    <>
      <div className='flex flex-col h-screen w-screen items-center'>
      <QuizCard totalQuestions={q1.length} currentIndex={0} options={q1[0].options} onAnswer={(index) => console.log(index)} question={q1.question}/>
      </div>
    </>
  )
}

export default App
