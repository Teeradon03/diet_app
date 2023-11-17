
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './components/login/Login'
import Form from './components/form/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import Register from './components/register/Register';
import Home from './components/home/Home';
import Question from './components/question/Question';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
