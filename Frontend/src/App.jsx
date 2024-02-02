import "bootstrap/dist/css/bootstrap.css"
import './App.css'

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './pages/login/Login.jsx';
import Form from './components/form/Form';
import Home from './components/home/Home';
import Question from './components/question/Question';
import NotFound404 from './pages/404/NotFound404';
import HomePage from './pages/home/HomePage';
import Ever from './components/ever/Ever';
import Never from './components/never/Never';
import CustomerKey from './components/customerKey/CustomerKey';
import Calendar_1 from './components/Calendar/Calendar_1';
import Target from './components/target/Target.jsx';
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
import Yesno from './components/Ynquiz/Yesno.jsx';
import Choice from './components/Choice/Choice.jsx';
import Choice2 from './components/Choice/Choice2.jsx';
import BMR_calculator from './components/Bmr/BMR_calculator';


import MainApp from './pages/admin/report/MainApp';
import QuestionReport from './pages/admin/report/question/Question';
import Questionnaires from './pages/admin/report/questionnaires/Questionnaires';
import Users from './pages/admin/report/user/Users';
import Report from "./pages/admin/report/Report.jsx";

import UserHomePage from "./pages/user/UserHomePage.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";
import UserRoute from "./routes/UserRoute.jsx";
import AdminHomePage from "./pages/admin/AdminHomePage.jsx";


import { currentUser } from "./functions/auth.js";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice.js";
import ManageUsers from "./pages/admin/ManageUsers.jsx";
function App() {

  const disPatch = useDispatch()

  const userId = localStorage.getItem('userId')
  // console.log('userID', userId)
  currentUser(userId)
    .then(response => {
      // console.log('asdasd',response)
      disPatch(login({
        userId: response.data.userId,
        role: response.data.role,
        name: response.data.line_username
      }))
    })
    .catch((error) => {
      // console.error('error', error)
    })

  return (
    <BrowserRouter>

      <Routes>
        {/* PUBLIC */}
        <Route path="/login" element={<Login />} />


        {/* ADMIN */}
        <Route path="/admin/index" element={
          <AdminRoute>
            <AdminHomePage />
          </AdminRoute>
        } />
        <Route path="/report/users" element={
          <AdminRoute>
            <Users />
          </AdminRoute>
        } />
        <Route path="/report/question" element={
          <AdminRoute>
            <QuestionReport />
          </AdminRoute>
        } />
        <Route path="/report/questionnaires" element={
          <AdminRoute>
            <Questionnaires />
          </AdminRoute>
        } />

        <Route path="/admin/manageUser" element={
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        } />


        {/* PUBLIC */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound404 />} />

        {/* USER */}

        <Route path="/user/index" element={
          <UserRoute>
            <UserHomePage />
          </UserRoute>
        } />


        <Route path="/home" element={
          // <UserRoute>
          <Home />
          // </UserRoute>
        } />

        <Route path="/form" element={
          <UserRoute>
            <Form />
          </UserRoute>

        } />

        <Route path="/question" element={
          <UserRoute>
            <Question />
          </UserRoute>
        } />

        <Route path="/ever" element={
          <UserRoute>
            <Ever />
          </UserRoute>
        } />
        <Route path="/never" element={
          <UserRoute>
            <Never />
          </UserRoute>
        } />
        <Route path="/customerkey" element={
          <UserRoute>
            <CustomerKey />
          </UserRoute>
        } />
        <Route path='/Name' element={
          <UserRoute>
            <Name />
          </UserRoute>
        } />
        <Route path='/calendar_1' element={
          <UserRoute>
            <Calendar_1 />
          </UserRoute>
        } />

        <Route path='/Target' element={
          <UserRoute>
            <Target />
          </UserRoute>
        } />

        <Route path='/Height_show' element={
          <UserRoute>
            <Height_show />
          </UserRoute>
        } />
        <Route path='/Weight_show' element={
          <UserRoute>
            <Weight_show />
          </UserRoute>
        } />


        <Route path='/Advice_lowweight' element={
          <UserRoute>
            <Advice_lowweight />
          </UserRoute>
        } />
        <Route path='/Advice_normalweight' element={
          <UserRoute>
            <Advice_normalweight />
          </UserRoute>
        } />
        <Route path='/Advice_obesitylevel1' element={
          <UserRoute>
            <Advice_obesitylevel1 />
          </UserRoute>
        } />
        <Route path='/Advice_obesitylevel2' element={
          <UserRoute>
            <Advice_obesitylevel2 />
          </UserRoute>
        } />
        <Route path='/Advice_obesitylevel3' element={
          <UserRoute>
            <Advice_obesitylevel3 />
          </UserRoute>
        } />

        <Route path='/BMI_calculator' element={
          <UserRoute>
            <BMI_calculator />
          </UserRoute>
        } />
        <Route path='/Bmi_lowweight' element={
          <UserRoute>
            <Bmi_lowweight />
          </UserRoute>} />
        <Route path='/Bmi_normalweight' element={
          <UserRoute>
            <Bmi_normalweight />
          </UserRoute>
        } />
        <Route path='/Bmi_obesitylevel1' element={
          <UserRoute>
            <Bmi_obesitylevel1 />
          </UserRoute>
        } />
        <Route path='/Bmi_obesitylevel2' element={
          <UserRoute>
            <Bmi_obesitylevel2 />
          </UserRoute>
        } />
        <Route path='/Bmi_obesitylevel3' element={
          <UserRoute>
            <Bmi_obesitylevel3 />
          </UserRoute>
        } />

        <Route path='/BMR_calculator' element={
          <UserRoute>
            <BMR_calculator />
          </UserRoute>
        } />

        <Route path="/Yesno" element={
          <UserRoute>
            <Yesno />
          </UserRoute>
        } />
        <Route path="/Choice" element={
          <UserRoute>
            <Choice />
          </UserRoute>
        } />
        <Route path="/Choice2" element={
          <UserRoute>
            <Choice2 />
          </UserRoute>
        } />

      </Routes>


      {/* <Routes>      

        

      <Route path="/report" element={<Report/>}/>
        <Route path="/report/users" element={<Users />}/>
        <Route path="/report/questionnaires" element={<Questionnaires />}/>
        <Route path="/report/test" element={<QuestionReport/>}/>
        <Route path="/report/test2" element={<DataTable/>}/>








        <Route path="/report/Table" element={<Table/>}/>
        
      

        <Route path="/report/MainApp" element={<MainApp/>}/>
        <Route path="/report/question" element={<QuestionReport/>}/>
        <Route path="/report/questionnaires" element={<Questionnaires/>}/>
        <Route path="/report/user" element={<Users/>}/>
      

      </Routes> */}
    </BrowserRouter>
  )
}

export default App