import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog-container'>
        <h2>Some Important Questions</h2>
        <div className="blog-ques">
            <h3>What is the purpose of react router?</h3>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
        </div>
        <div className="blog-ques">
            <h3>How does context api work?</h3>
            <p>Context is a built-in API. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.</p>
        </div>
        <div className="blog-ques">
            <h3>What is useRef in react?</h3>
            <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
        </div>
    </div>
  )
}

export default Blog