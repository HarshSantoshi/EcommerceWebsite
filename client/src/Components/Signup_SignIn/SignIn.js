import React, { useState , useEffect} from 'react'
import './signin.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../Context/contextProvider';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import shopzone from "../image/shopzone_logo2.png";
function SignIn() {
    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    const { account, setAccount } = useContext(LoginContext);
    const addData = (e) => {
        const { name, value } = e.target;
        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    }
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const sendData = async (e) => {
        e.preventDefault();
        const { email, password } = logdata;
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
    
        if(res.status === 400 || data===null){
            console.log("Invalid Deatails");
            toast.warn("User Not Exist!", {
                position: "top-center"
            });
        }
        else if(res.status === 400 || !data){
            console.log("Invalid Deatails");
            toast.warn("Invalid Details!", {
                position: "top-center"
            });
        }
        else {
            console.log("Valid Data");
            setAccount(data);
            toast.success("User Logged In", {
                position: "top-center"
            });
            setData({ ...logdata, email: "", password: "" });
        }
    }
    return (
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src={shopzone} alt='Company LOGO' />
                </div>
                <div className='sign_form'>
                    <form method='POST'>
                        <h1>Sign-In</h1>
                        <div className='form_data'>
                            <label htmlFor='email' >Email</label>
                            <input type='text'
                                onChange={addData}
                                value={logdata.email}
                                name="email" id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password' >Password</label>
                            <input type='password'
                                onChange={addData}
                                value={logdata.password}
                                name="password" id='password' placeholder='At least 6 characters' />
                        </div>
                        <button className='signin_btn' onClick={sendData}>Login</button>
                    </form>
                </div>
                <div className='create_accountinfo'>
                    <p>New to Shopzone ?</p>
                    <NavLink to="/signup" ><button>Create your Shopzone Account</button></NavLink>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default SignIn
