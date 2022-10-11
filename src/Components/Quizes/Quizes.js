import React from 'react';
import './Quizes.css'
import { useLoaderData } from 'react-router-dom'
import Quiz from '../Quiz/Quiz';
import { ToastContainer } from 'react-toastify';

const Quizes = () => {
    const quizes = useLoaderData().data;
  return (
    <div className='quizes-container'>
        <h2>Quiz of {quizes.name}</h2>
        <div className="quizes">
        {
            quizes.questions.map((quiz,index) => <Quiz key={quiz.id} quiz = {quiz} index ={index}/>)
        }
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Quizes