import './App.css';
import {NavBar} from "./components/Navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from "./components/Banner/Banner";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects"
import {Contact} from  "./components/Contact/Contact"
function App() {
  return (
      <div className="App">
        <NavBar/>
          <Banner/>
          <Skills/>
          <Projects/>
          <Contact/>
      </div>
  );
}

export default App;