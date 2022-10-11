
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Quizes from './Components/Quizes/Quizes';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';
import Error from './Components/Error/Error';
import Statistics from './Components/Staistics/Statistics';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics/>
        },
        {
          path:'home',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics/>
        },
        {
          path: '/topic/:quizId',
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<Quizes/>
        },
        {
          path:'/statistics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics/>
        },
        {
          path:'/blog',
          element: <Blog/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
