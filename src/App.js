import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Khalti from "./components/Khalti";
import Profile from "./components/Profile";
import Iphone from "./components/Iphone";
import Fan from "./components/Fan";
import Video from "./components/Video";
import BreakingBad from "./components/BreakingBad";

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
          <Route exact path='/khalti' element={<Khalti/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/iphone' element={<Iphone/>}/>
          <Route exact path='/fan' element={<Fan/>}/>
          <Route exact path='/video' element={<Video/>}/>
          <Route exact path='/meth' element={<BreakingBad/>}/>


        </Routes>

      </Router>
    </div>
  );
}

export default App;
