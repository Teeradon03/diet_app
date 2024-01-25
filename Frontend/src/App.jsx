import "bootstrap/dist/css/bootstrap.css"

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
import Yesno from './components/Ynquiz/Yesno.jsx'
import Choice from './components/Choice/Choice.jsx'
import Choice2 from './components/Choice/Choice2.jsx'
import BMR_calculator from './components/Bmr/BMR_calculator'
import Report from "./pages/report/Report.jsx";
import Users from "./pages/report/user/Users.jsx";
import SideBar from "./pages/report/SideBar.jsx";
import HeaderBar from "./pages/report/HeaderBar.jsx";
import MainApp from "./pages/report/MainApp.jsx";
import Register from "./pages/Login/auth/register.jsx";
import Questionnaires from "./pages/report/questionnaires/Questionnaires.jsx";

   /////////////////////////////Fate2///////////////////////////////
import Chart from "./Fate2/Chart/Chart.jsx";
import Home48 from "./Fate2/Home48.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/report" element={<Report/>}/>
        <Route path="/report/users" element={<Users />}/>
        <Route path="/report/questionnaires" element={<Questionnaires />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/ever" element={<Ever />} />
        <Route path="/never" element={<Never />} />
        <Route path="/customerkey" element={<CustomerKey />} />

        <Route path='/calendar_1' element={<Calendar_1 />} />

        <Route path='/Target' element={<Target />} />

        <Route path='/Height_show' element={<Height_show />} />
        <Route path='/Weight_show' element={<Weight_show />} />

        <Route path='/Advice_lowweight' element={<Advice_lowweight />} />
        <Route path='/Advice_normalweight' element={<Advice_normalweight />} />
        <Route path='/Advice_obesitylevel1' element={<Advice_obesitylevel1 />} />
        <Route path='/Advice_obesitylevel2' element={<Advice_obesitylevel2 />} />
        <Route path='/Advice_obesitylevel3' element={<Advice_obesitylevel3 />} />

        <Route path='/BMI_calculator' element={<BMI_calculator />} />
        <Route path='/Bmi_lowweight' element={<Bmi_lowweight />} />
        <Route path='/Bmi_normalweight' element={<Bmi_normalweight />} />
        <Route path='/Bmi_obesitylevel1' element={<Bmi_obesitylevel1 />} />
        <Route path='/Bmi_obesitylevel2' element={<Bmi_obesitylevel2 />} />
        <Route path='/Bmi_obesitylevel3' element={<Bmi_obesitylevel3 />} />

        <Route path='/BMR_calculator' element={<BMR_calculator />} />


        <Route path='/Name' element={<Name />} />

        <Route path="/Yesno" element={<Yesno />} />
        <Route path="/Choice" element={<Choice />} />
        <Route path="/Choice2" element={<Choice2 />} />

        <Route path="/report/SideBar" element={<SideBar />} />
        <Route path="/report/HeaderBar" element={<HeaderBar />} />
        <Route path="/report/MainApp" element={<MainApp />} />
        <Route path="/Login/Register" element={<Register />} />

   /////////////////////////////Fate2///////////////////////////////

        <Route path="/Chart" element={<Chart />} />
        <Route path="/Home48" element={<Home48 />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
