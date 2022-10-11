import React from 'react'
import headerImg from '../../Images/headerImg.webp';
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
        <div className='header'>
            <img src={headerImg} alt="" />
        </div>
        <div className="header-details">
            <h2>Welcome to Quiziest!</h2>
            <p>
                Quiziest is a online platform. Here you can practice different web technology by answering some important quizes. 
            </p>
        </div>
    </div>
  )
}

export default Header