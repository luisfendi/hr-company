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
import { NoMatch } from './pages/nomatch/NoMatch';
import { Type } from './pages/type/Type';
import { Item, loader as ItemLoader } from './pages/item/Item';
import {loader as MainLoader} from './pages/main/Main';
import { Layout } from './components/skeleton/Skeleton';
import { Spinner } from './components/spinner/Spinner';

const nav_themes = 'products pricing partners'
  .split(' ')
  .map((el, i) => {
    return {
      // path: `${el}`,
      // element: <Type/>,
      // children: [
      //   {
      //     path: `/${el}/:id`,
      //     element: <Item/>,
      //     loader: ItemLoader,
      //   }
      // ]
      path: `:type/:id`,
      element: <Item/>,
      loader: ItemLoader,
    }
  });



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: MainLoader,
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
        path: '*',
        element: <NoMatch />
      },
      {
        path: 'types',
        element: <Type/>,
        children: [
          ...nav_themes
        ]
      }
    ]
  }
], {
  basename: "/app"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Layout/>} />
  </React.StrictMode>
);

