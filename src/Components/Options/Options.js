import React from 'react'

const Options = ({option,index,notify}) => {
   
  return (
    <div className='option' onClick={()=>notify(option)}>
    {/* <label   >
    <input type="radio" name='radio' id={index}/>
    <p>{option}</p>
    </label> */}
    <p>{option}</p>
     </div>
  )
}

export default Options