import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus';
import BlogPages from './Pages/BlogPages';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import Partners from './Pages/Partners';
import AdminSignin from './Pages/Adminsignin';
import AdminHome from './Pages/AdminHome';
import AdminTickets from './Pages/AdminTickets';
import AdminBlogs from './Pages/adminblog';
import CreateBlog from './Pages/CreateBlog';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/blogs' Component={BlogPages}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/aboutus' Component={Aboutus}/>
        <Route path='/partners' Component={Partners}/>
        <Route path='/admin/sign' Component={AdminSignin}/>
        <Route path='/admin/home' Component={AdminHome}/>
        <Route path='/admin/tickets' Component={AdminTickets}/>
        <Route path='/admin/blogs' Component={AdminBlogs}/>
        <Route path='/admin/blogs/create' Component={CreateBlog}/>
      </Routes>
    </Router>
  );
}

export default App;
