import './css/styles.css';
import './js/scripts';
import { Routes, Route, Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Register from './pages/Register';
import Error404 from './pages/404';

function App() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <SideNav />
        </div>

        <div id="layoutSidenav_content">
          <Main>
            <Router>
              <Routes>
                <Route path="/register" element={ <Register /> } /> 
                
                <Route path="*" element={ <Error404/> } />
              </Routes>
            </Router>
          </Main>
          <Footer />
        </div>        
      </div>


    </div>

  );
}

export default App;
