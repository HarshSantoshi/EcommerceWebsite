
import './App.css';
import Navbar from './Components/Header/Navbar';
import Newnav from './Components/newNavbar/Newnav';
import Maincomponent from './Components/Home/Maincomponent';
import SignIn from './Components/Signup_SignIn/SignIn';
import SignUp from './Components/Signup_SignIn/SignUp';
import { Routes  , Route } from 'react-router-dom';
import Footer from './Components/footer/footer';
function App() {
  return (
    <>
    <Navbar/>
    <Newnav/>
    <Routes>
      <Route path='/' element={<Maincomponent/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/singup' element={<SignUp/>} />
    </Routes>
    <Footer />

    </>
  );
}

export default App;

