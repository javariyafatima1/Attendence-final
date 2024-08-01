import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,useLocation} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import  Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateAtten from './components/CreateAtten';
import AllAtten from './components/AllAtten';
import AuthRoute from './components/AuthRoute';
import DashboardHeader from './components/headerdashbaordstudent';

function App() {
  const location = useLocation();
  const isDashboardRoute = ['/dashbord', '/addattendence', '/allatten'].includes(location.pathname);
  return (
    <div>
      {isDashboardRoute ? <DashboardHeader/> : <Header />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashbord" element={<AuthRoute element={<Dashboard />} />} />
          <Route path="/addattendence" element={<AuthRoute element={<CreateAtten />} />} />
          <Route path="/allatten" element={<AuthRoute element={<AllAtten />} />} />
        </Routes>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
