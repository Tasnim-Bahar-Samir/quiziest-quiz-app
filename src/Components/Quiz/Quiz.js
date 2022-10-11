import React from 'react';
import './Quiz.css';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Quiz = ({quiz,index}) => {
  console.log(quiz)
  const notify = (data) =>{
    if(data === quiz.correctAnswer){
     return toast('Write Answer')
    }else{
        return toast("Wrong Answer")
    }
} 
  return (
    <div>
        
        <div className="single-quiz">
            <h4>Quiz{index+1} :{quiz.question}</h4>
            <div className="options">
                {
                    quiz.options.map((option,index)=> <Options option={option} key={index} index={index} notify ={notify}/>)
                }
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Quiz