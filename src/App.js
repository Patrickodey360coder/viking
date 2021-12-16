import './css/styles.css';
import './js/scripts';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Register from './pages/Register';
import Error401 from './pages/401'
import Error404 from './pages/404';
import Error500 from './pages/500';
import Charts from './pages/Chart';
import Tables from './pages/Tables';

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
              <Route path="/401" element={<Error401 />} />
              <Route path="/500" element={<Error500 />} />
              <Route path="*" element={ <Error404/> } />
            </Routes>
          <Footer />
        </div>        
      </div>


    </div>
  );
}

export default App;
