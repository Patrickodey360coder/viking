import './css/styles.css';
import './js/scripts';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error401 from './pages/401';
import Error404 from './pages/404';
import Error500 from './pages/500';
import Charts from './pages/Chart';
import Tables from './pages/Tables';
import Password from './pages/Password';
import Calendar from './pages/Calendar';
import Forms from './pages/Forms';
import Gallery from './pages/Gallery';
import Mailbox from './pages/Mailbox';
import Elements from './pages/UI_Elements';
import Documentation from './pages/Documentation';
import Extras from './pages/Extras';
import Widgets from './pages/Widgets';
import Pages from './pages/Pages';

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
              <Route path="/login" element={ <Login /> } /> 
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/calendar" element={ <Calendar /> } /> 
              <Route path="/forms" element={ <Forms /> } /> 
              <Route path="/gallery" element={ <Gallery /> } /> 
              <Route path="/mailbox" element={ <Mailbox /> } /> 
              <Route path="/elements" element={ <Elements /> } /> 
              <Route path="/password" element={ <Password /> } />
              <Route path="/charts" element={ <Charts/> } />
              <Route path="/tables" element={ <Tables/> } />
              <Route path="/documentation" element={ <Documentation/> } />
              <Route path="/extras" element={ <Extras/> } />
              <Route path="/widgets" element={ <Widgets/> } />
              <Route path="/pages" element={ <Pages/> } />
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
