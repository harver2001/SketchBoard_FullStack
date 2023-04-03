import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { Context } from './context/Context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import Art from './pages/art/Art';
import Gallery from './pages/gallery/Gallery';
import { About } from './pages/about/About';
function App() {
  const {user} = useContext( Context );
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/art' element={<Art />} />
        <Route path='/draw' element={<Gallery />} />
        <Route path='/register' element={user?<Home /> :<Register />} />
        <Route path='/login' element={user?<Home /> :<Login />} />
        <Route path='/write' element={user?<Write />:<Register />} />
        <Route path='/settings' element={user?<Settings />:<Register />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
