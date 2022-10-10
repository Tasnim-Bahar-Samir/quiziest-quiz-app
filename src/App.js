
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      // children:[
      //   {
      //     path:'/',

      //   }
      // ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
