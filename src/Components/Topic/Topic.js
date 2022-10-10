import React from 'react'
import './Topic.css'
const Topic = ({topic}) => {
    const{id,name,logo} = topic;
  return (
    <div>
        <div className="single-topic">
            <img src={logo} alt=""/>
            <h3>{name}</h3>
            <button className='start-btn'>Start Quiz</button>
        </div>
    </div>
  )
}

export default Topic