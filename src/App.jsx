// import "bootstrap/dist/css/bootstrap.css"

import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './components/login/Login'
import Form from './components/form/Form';
import Home from './components/home/Home';
import Question from './components/question/Question';
import Card from './components/card/Card';
import NotFound404 from './pages/404/NotFound404';
import Login_404 from './components/login/Login_404'
import HomePage from './pages/home/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login_404" element={<Login_404 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
