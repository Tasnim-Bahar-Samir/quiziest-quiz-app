import React from 'react'
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({topic}) => {
    const{id,name,logo} = topic;
  return (
    <div>
        <div className="single-topic">
            <img src={logo} alt=""/>
            <h3>{name}</h3>
            <Link to={`/topic/${id}`}><button className='start-btn'>Start Quiz</button></Link>
        </div>
    </div>
  )
}

export default Topic