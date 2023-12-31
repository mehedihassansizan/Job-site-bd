/* eslint-disable no-dupe-keys */
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
import Blog from './components/Blogs/Blogs';
import Main from './components/Layout/Main';
import JobDetails from './components/JobDetails/JobDetails';
import { JobData } from './components/Utilities/appliedjob';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('job_data.json')
      },
      {
        path: '/:jobId',
        element: <JobDetails></JobDetails>,
        loader : () => fetch('job_data.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('rechart.json')
      },
      {
        path: 'applied_jobs',
        element: <Applied_Jobs></Applied_Jobs>,
        loader : JobData
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
        loader: () => fetch('blog.json')
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
