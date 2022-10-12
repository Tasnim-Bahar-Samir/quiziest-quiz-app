import React, { useState } from 'react';
import './Quiz.css';
import Options from '../Options/Options';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import{AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';


const Quiz = ({quiz,index}) => {
  const [open,setOpen] = useState(false);

  const notify = (data) =>{   
    if(data === quiz.correctAnswer){
      return toast.success('Write Answer')
     }else{
         return toast.error("Wrong Answer")
     }
} 
const handleAns = ()=>{
  setOpen(!open);
}
  return (
    <div>
        
        <div className="single-quiz">
            <h4>Quiz{index+1} :{quiz.question}</h4>
            {
              open ? <AiFillEye onClick={handleAns} className='eye-btn'/> :<AiFillEyeInvisible onClick={handleAns} className='eye-btn'/>
            }
            <div className="options">
                {
                    quiz.options.map((option,idx)=> <Options option={option} key={idx} index={index} notify ={notify} idx ={idx}/>)
                }
            </div>
            <div className={`show-ans ${open ? null:'hidden'}`}>
          <p>Ans: {quiz.correctAnswer}</p>
        </div>
        </div>
        
    </div>
  
  )
}

export default Quiz