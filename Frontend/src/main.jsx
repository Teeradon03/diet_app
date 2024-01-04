import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Question from './components/question/Question.jsx'
import Choice from './components/Choice/Choice.jsx';
import Choice2 from './components/Choice/Choice2.jsx'
import Yesno from './components/Ynquiz/Yesno.jsx'


const router = createBrowserRouter([
  {
    path: "/yesno",
    element: <Yesno/>
  },
  {
    path: "/question",
    element: <Question/>,
  },
  {
    path: "/Choice",
    element: <Choice/>,
  },
  {
    path: "/Choice2",
    element: <Choice2/>,
  },
  ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
