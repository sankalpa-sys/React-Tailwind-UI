



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="">
      <Router>
        
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/pricing' element={<Pricing/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
