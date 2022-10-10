import React from 'react';
import './Quiz.css'

const Quiz = ({quiz,index}) => {
  return (
    <div>
        <div className="single-quiz">
            <h4>Quiz{index+1} :{quiz.question}</h4>
            <div className="options">
                {
                    quiz.options.map((option,index)=>{
                        return <label htmlFor={index} className='option' key={index}>
                            <input type="radio" name="radio" id={index}/>
                            <p>{option}</p>
                        </label>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Quiz