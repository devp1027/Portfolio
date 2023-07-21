import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import image from './Components/Icons/home_wallpaper_new.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat"}}>
      <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
