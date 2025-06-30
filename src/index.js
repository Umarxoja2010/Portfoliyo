import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter =createBrowserRouter([{
  errorElement:<ErrorPage/>,
  path:"/",
  element:<App/>,
  children:[
{
  path:"/",
  element:<HomePage/>
}
  ]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);

