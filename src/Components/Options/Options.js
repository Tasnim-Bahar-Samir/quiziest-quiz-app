import React, { useEffect, useState } from 'react';


const Options = ({option,index,notify,idx}) => {
  const [active,setActive] = useState(false);
   useEffect(
    ()=>{
    if(active){
      notify(option);
      setActive(false)
    }
   },[active])
  return (
      <label onClick={()=>setActive(!active)} className='option'>
      <input type="radio" name={index} id={index}/>
      {option}
      </label>
    
  )
}

export default Options