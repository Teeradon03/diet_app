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
import Yesno from './components/Ynquiz/Yesno';
import Choice from './components/Choice/Choice';
import Choice2 from './components/Choice/Choice2';
import BMR_calculator from './components/Bmr/BMR_calculator';

import Table from './pages/report/user/Table';

import MainApp from './pages/report/MainApp';
import QuestionReport from './pages/report/question/Question';
import Questionnaires from './pages/report/questionnaires/Questionnaires';
import User from './pages/report/user/Users';

//fate2
import Product from './fate2/Products/Product';
import Nanox2 from './fate2/Products/Nanox2';
import Nanova from './fate2/Products/Nanova';

import Exercise from './fate2/Exercise/Exercise';

import Program_IF from './fate2/Program_IF/Program_IF';
import CardList from './fate2/Program_IF/CardList';
import Menu08 from './fate2/Program_IF/Menu08.jsx';
import Menu12 from './fate2/Program_IF/Menu12.jsx';
import Menu14 from './fate2/Program_IF/Menu14.jsx';
import MenuItem from './fate2/Program_IF/MenuItem';
import FoodDetails from './fate2/Program_IF/FoodDetails';
import Menu15 from './fate2/Program_IF/Menu15';


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

        <Route path='/BMR_calculator' element={<BMR_calculator />}/>


        <Route path='/Name' element={<Name/>}/>

        <Route path="/Yesno" element={<Yesno />} />
        <Route path="/Choice" element={<Choice />} />
        <Route path="/Choice2" element={<Choice2 />} />

        <Route path="/report/Table" element={<Table/>}/>

        <Route path="/report/MainApp" element={<MainApp/>}/>
        <Route path="/report/question" element={<QuestionReport/>}/>
        <Route path="/report/questionnaires" element={<Questionnaires/>}/>
        <Route path="/report/user" element={<User/>}/>

    ////////////////////////////////////////////////////////////////////////////////fate2
        
        <Route path="/fate2/product" element={<Product/>}/>
        <Route path="/fate2/nanox2" element={<Nanox2/>}/>
        <Route path="/fate2/nanova" element={<Nanova/>}/>

        <Route path="/fate2/exercise" element={<Exercise/>}/>  

        <Route path="/fate2/program_IF" element={<Program_IF/>}/>
        <Route path="/fate2/menu08" element={<Menu08/>}/>
        <Route path="/fate2/menu12" element={<Menu12/>}/>
        <Route path="/fate2/menu14" element={<Menu14/>}/>
        <Route path="/fate2/menu15" element={<Menu15/>}/>
        <Route path="/fate2/cardlist" element={<CardList/>}/>
        <Route path="/fate2/menuItem" element={<MenuItem/>}/>
        <Route path="/fate2/foodDetails" element={<FoodDetails/>}/>
       

      </Routes>
    </BrowserRouter>
  )
}

export default App