// import "bootstrap/dist/css/bootstrap.css"

import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './components/login/Login'
import Form from './components/form/Form';
import Home from './components/home/Home';
import Question from './components/question/Question';
import NotFound404 from './pages/404/NotFound404';
import HomePage from './pages/home/HomePage';
import Ever from './components/ever/Ever';
import Never from './components/never/Never';
import CustomerKey from './components/customerKey/CustomerKey';
<<<<<<< HEAD
import Yesno from './components/Ynquiz/Yesno'
=======
import Yesno from './components/Ynquiz/Yesno.jsx'
>>>>>>> 397a097450a71faad5f5edfc30e9423cea6e3e45

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/ever" element={<Ever />} />
        <Route path="/never" element={<Never />} />
        <Route path="/customerkey" element={<CustomerKey />} />
<<<<<<< HEAD
        <Route path="/yesno" element={<Yesno />} />
        
=======
        <Route path="/Yesno" element={<Yesno />} />
>>>>>>> 397a097450a71faad5f5edfc30e9423cea6e3e45
      </Routes>
    </BrowserRouter>
  )
}

export default App
