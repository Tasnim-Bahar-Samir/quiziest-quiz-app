import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom'
import Topic from '../Topic/Topic';
import Header from '../Header/Header';

const Topics = () => {
    const topics= useLoaderData().data;
  return (
    <div >
      <Header/>
        <div className='topics-container'>
          {
              topics.map(topic => <Topic key={topic.id} topic={topic}/>)
          }
        </div>
    </div>
  )
}

export default Topics