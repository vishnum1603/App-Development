import './assets/css/App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom" ;
import Login from './components/Login' ;
import Signup from './components/Signup' ;
import  Home from './components/Home';
import Dashboard from './components/Dashboard';
import User from './components/User';

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
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
