import React, { useState } from 'react';


const Options = ({option,index,notify}) => {
  const [active,setActive] = useState(false);
   const notification = ()=>{
    setActive(!active);
    if(active){
      notify(option);
    }
    
   }
  return (
    <label onClick={notification} className='option'>
    <input type="radio" name='radio' id={index}/>
    <p>{option}</p>
    </label>
  )
}

export default Options