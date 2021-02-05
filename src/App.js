import './App.css';
import './Components/Navbar/Navbar.css';
import N from './Components/Navbar/Navbar';
import P from "./Components/Profile/Profile";
import './Components/Profile/Profile.css';
import A from "./Components/About/About";
import "./Components/About/About.css";

function App() {
   const handleName  = fullname => alert(fullname);
  return (
    <div>
     <N/>
     <div className="aboutme">
     { <P  fullname="Jdidi Nadhem" bio="Degree from ESSECT" profession="Software developer"  handleName={handleName}>CVPIC.JPG</P> }
     <A fullname="Jdidi Nadhem" location="Tunis,Tunisia" degree="Essect" phone="53310408" email="jedidinadhem@gmail.com" dateOfBirth="13/06/1997" experience="1 Year" careerLevel="Mid-Level"/>
     </div>
    </div>
  );
}

export default App;
