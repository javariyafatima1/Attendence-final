import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashbord" element={<Dashbord />}/>
       </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
