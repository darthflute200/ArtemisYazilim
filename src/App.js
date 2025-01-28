import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus';
import BlogPages from './Pages/BlogPages';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import Partners from './Pages/Partners';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/blogs' Component={BlogPages}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/aboutus' Component={Aboutus}/>
        <Route path='/partners' Component={Partners}/>
      </Routes>
    </Router>
  );
}

export default App;
