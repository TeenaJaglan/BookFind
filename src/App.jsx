
import './App.css';
import Card from './components/card/card.jsx';
import Home from './components/Homepage/home';
import Sign from './components/Homepage/sign';
import LoginPage from './components/loginpage/loginpage';
import SignupPage from './components/signuppage/signuppage';
import { Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Routes> 
       <Route path ="/" element ={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element ={<SignupPage/>}/>
        </Routes>
        <Sign/>
     
    </div>
  );
}

export default App;
