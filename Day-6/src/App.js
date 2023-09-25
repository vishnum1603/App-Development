import './assets/css/App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom" ;
import Login from './components/Login' ;
import Signup from './components/Signup' ;
import  Home from './components/Home';
import Dashboard from './components/Dashboard';
import User from './components/User';
import About from './components/About';
import NavBar from './components/NavBar';
import Privacy from './components/Privacy';
import TermsAndConditions from './components/TermsAndConditions';
import EnhancedTable from './components/EnhancedTable';
import Inventory from './components/Inventry';
import FAQ from './components/Faq';
import Report from './components/Report';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/nav" element={<NavBar/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/privacyAndPolicy" element={<Privacy/>}/>
      <Route path='/termsAndCondition' element={<TermsAndConditions/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/orders' element={<EnhancedTable/>}/>
      <Route path='/inventory' element={<Inventory/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path="/service" element={<ServicePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
