
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Quizes from './Components/Quizes/Quizes';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics/>
        },
        {
          path: '/topic/:quizId',
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<Quizes/>
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
