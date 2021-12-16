import './css/styles.css';
import './js/scripts';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Register from './pages/Register';
import Error404 from './pages/404';
import Charts from './pages/Charts';

function App() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <SideNav />
        </div>

        <div id="layoutSidenav_content">
            <Routes>
              <Route path="/" element={ <Main /> } /> 
              <Route path="/register" element={ <Register /> } /> 
              <Route path="/charts" element={ <Charts/> } />
              <Route path="/tables" element={ <Tables/> } />
              <Route path="*" element={ <Error404/> } />
            </Routes>
          <Footer />
        </div>        
      </div>


    </div>
  );
}

export default App;
