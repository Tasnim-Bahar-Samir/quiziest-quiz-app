import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';
import './Error.css';

const Error = () => {
    const error = useRouteError();
    const navigator = useNavigate();
    const navigate = ()=>{
        navigator('/')
    }
  return (
    <div className="error-container">
        <div className='error'>   
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
            <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={navigate}>Back TO Home</button>
        </div>
    </div>
  )
}
export default Error