import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Applied_Jobs from './components/Applied_Jobs/Applied_Jobs';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Home></Home>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied_jobs',
        element: <Applied_Jobs></Applied_Jobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <h1>The page is not Found</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
