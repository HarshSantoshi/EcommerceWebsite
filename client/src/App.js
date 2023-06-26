
import './App.css';
import Navbar from './Components/Header/Navbar';
import Newnav from './Components/newNavbar/Newnav';
import Maincomponent from './Components/Home/Maincomponent';
import SignIn from './Components/Signup_SignIn/SignIn';
import SignUp from './Components/Signup_SignIn/SignUp';
import Cart from './Components/cart/cart';
import Buynow from './Components/buynow/Buynow';
import { Routes  , Route } from 'react-router-dom';
import Footer from './Components/footer/footer';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
function App() {
  const [data,setData] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true);
    },2000)
  },[])
  return (
    <>
   {
     data ? (
      <>
      <Navbar/>
    <Newnav/>
    <Routes>
      <Route path='/' element={<Maincomponent/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/getproductsone/:id' element={<Cart/>} />
      <Route path='/buynow' element={<Buynow/>} />
    </Routes>
    <Footer />
      </>
    ) :
    (
      <div className='circle'>
        <CircularProgress/>
        <h2>Loading...</h2>
      </div>
    )
    

   }
    </>
  );
}

export default App;

