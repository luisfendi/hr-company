import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './style/main.scss';
import {
  createBrowserRouter,
  RouterProvider,
  useOutlet,
} from "react-router-dom";
import ErrorPage from './pages/error/Error';
import { Login } from './pages/login/Login';
import { Main } from './pages/main/Main';
import {Spinner} from './components/spinner/Spinner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      { 
        // path: '*',
        // errorElement: <ErrorPage/>
      }
    ]
  }
], {
  basename: "/app"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner/>}/>
  </React.StrictMode>
);

