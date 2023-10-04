import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>  
     
    </div>
    </BrowserRouter>
  );
}

export default App;
