// import "bootstrap/dist/css/bootstrap.css"

import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './components/login/Login';
import Form from './components/form/Form';
import Home from './components/home/Home';
import Question from './components/question/Question';
import NotFound404 from './pages/404/NotFound404';
import HomePage from './pages/home/HomePage';
import Ever from './components/ever/Ever';
import Never from './components/never/Never';
import CustomerKey from './components/customerKey/CustomerKey';
import Calendar_1 from './components/Calendar/Calendar_1';
import Target from './pages/target/Target';
import Name from './components/Name/Name';
import Height_show from './components/Height/Height_show';
import Weight_show from './components/Weight/Weight_show';
import Advice_lowweight from './pages/Advice/Advice_lowweight';
import Advice_normalweight from './pages/Advice/Advice_normalweight';
import Advice_obesitylevel1 from './pages/Advice/Advice_obesitylevel1';
import Advice_obesitylevel2 from './pages/Advice/Advice_obesitylevel2';
import Advice_obesitylevel3 from './pages/Advice/Advice_obesitylevel3';
import BMI_calculator from './components/Bmi/BMI_calculator';
import Bmi_lowweight from './components/Bmi/Bmi_lowweight';
import Bmi_normalweight from './components/Bmi/Bmi_normalweight';
import Bmi_obesitylevel1 from './components/Bmi/Bmi_obesitylevel1';
import Bmi_obesitylevel2 from './components/Bmi/Bmi_obesitylevel2';
import Bmi_obesitylevel3 from './components/Bmi/Bmi_obesitylevel3';


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

        <Route path='/calendar_1' element={<Calendar_1 />}/>
       
        <Route path='/Target' element={<Target />}/>

        <Route path='/Height_show' element={<Height_show />}/>
        <Route path='/Weight_show' element={<Weight_show />}/>

        <Route path='/Advice_lowweight' element={<Advice_lowweight />}/>
        <Route path='/Advice_normalweight' element={<Advice_normalweight />}/>
        <Route path='/Advice_obesitylevel1' element={<Advice_obesitylevel1 />}/>
        <Route path='/Advice_obesitylevel2' element={<Advice_obesitylevel2 />}/>
        <Route path='/Advice_obesitylevel3' element={<Advice_obesitylevel3 />}/>

        <Route path='/BMI_calculator' element={<BMI_calculator />}/>
        <Route path='/Bmi_lowweight' element={<Bmi_lowweight />}/>
        <Route path='/Bmi_normalweight' element={<Bmi_normalweight />}/>
        <Route path='/Bmi_obesitylevel1' element={<Bmi_obesitylevel1 />}/>
        <Route path='/Bmi_obesitylevel2' element={<Bmi_obesitylevel2 />}/>
        <Route path='/Bmi_obesitylevel3' element={<Bmi_obesitylevel3 />}/>


        <Route path='/Name' element={<Name/>}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App
