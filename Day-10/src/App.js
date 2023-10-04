import './assets/css/App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom" ;
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
import Custom from './components/Custom';
import CustomPage from './components/CustomPage';
import Output from './components/Output';
import Checkout from './components/Checkout';
import LantingPage from './components/LantingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<LantingPage/>}/>
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
      <Route path="/custom" element={<Custom/>}/>
      <Route path='/customPage' element={<CustomPage/>}/>
      <Route path='/output' element={<Output/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
