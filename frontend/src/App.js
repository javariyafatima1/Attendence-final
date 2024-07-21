import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Singup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashbord" element={<Dashbord />}/>
       </Routes>
        </div>
        </BrowserRouter>
  );
}

export default App;
