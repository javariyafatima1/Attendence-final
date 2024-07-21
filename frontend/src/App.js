import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import  Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateAtten from './components/CreateAtten';
import AllAtten from './components/AllAtten';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashbord" element={<Dashboard />}/>
          <Route path="/addattendence" element={<CreateAtten />}/>
          <Route path="/allatten" element={< AllAtten/>}/>
       </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
