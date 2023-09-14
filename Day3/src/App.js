import './assets/css/App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom" ;
import Login from './components/Login' ;
import Signup from './components/Signup' ;

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
