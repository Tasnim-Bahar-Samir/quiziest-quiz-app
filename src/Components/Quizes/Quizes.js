import React from 'react';
import './Quizes.css'
import { useLoaderData } from 'react-router-dom'
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData().data;
    console.log(quizes)
  return (
    <div className='quizes-container'>
        <h2>Quiz of {quizes.name}</h2>
        <div className="quizes">
        {
            quizes.questions.map((quiz,index) => <Quiz key={quiz.id} quiz = {quiz} index ={index}/>)
        }
        </div>
        
    </div>
  )
}

export default Quizes