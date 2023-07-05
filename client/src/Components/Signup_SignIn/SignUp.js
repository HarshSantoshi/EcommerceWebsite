import React, { useState } from 'react'
import './signin.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import shopzone from "../image/shopzone_logo2.png";
function SignUp() {
    const [userData , setuData] = useState({
        fname:"",
        email :"",
        mobile :"",
        password:"",
        cpassword:""
    });
    console.log(userData);
    const addData =(e)=>{
        const {name , value} = e.target; 
        setuData(()=>{
            return {
                ...userData,
                [name]:value
            }
        })
    }

    const senddata = async(e)=>{
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = userData;
        if(fname === ""){
            toast.warn("Name Required!", {
                position: "top-center"
            });
        }
        else if(email === ""){
            toast.warn("Email Required!", {
                position: "top-center"
            });
        }
        else if(mobile === ""){
            toast.warn("Mobile no Required!", {
                position: "top-center"
            });
        }
        else if(password === ""){
            toast.warn("Password Required!", {
                position: "top-center"
            });
        }
        else if(password.length <6){
            toast.warn("Enter a more strong password!", {
                position: "top-center"
            });
        }
        else if(cpassword === ""){
            toast.warn("Confirm Your Password!", {
                position: "top-center"
            });
        }
        else{
            const res = await fetch("signup" ,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    fname,email,mobile,password,cpassword
                })
            });
            const data = await res.json();
            // console.log(data);

            if(res.status === 422 || !data){
                // alert("no data")
                toast.warn("Invalid Details!", {
                    position: "top-center"
                });
            }
            else{
                // alert("data successfully added")
                setuData({...userData,fname:"",email:"",mobile:"",password:"",cpassword:""})
                toast.success("Registration Successfully done!", {
                    position: "top-center"
                });
            }
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
                        <h1>Create Account</h1>
                        <div className='form_data'>
                            <label htmlFor='fname' >Your name</label>
                            <input type='text' 
                            onChange={addData}
                            value ={userData.fname}
                             name="fname" id='fname' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='email' >Email</label>
                            <input type='text'
                             onChange={addData} 
                             value ={userData.email}
                             name="email" id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='mobile' >Mobile</label>
                            <input type='text' 
                            onChange={addData}
                            value ={userData.mobile}
                             name="mobile" id='mobile' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password' >Password</label>
                            <input type='password' 
                            onChange={addData}
                            value ={userData.password}
                             name="password" id='password' placeholder='At least 6 characters' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='cpassword' >Confirm Password</label>
                            <input type='password' 
                            onChange={addData} 
                            value ={userData.cpassword}
                            name="cpassword" id='cpassword' placeholder='Re-enter Your password' />
                        </div>
                        <button className='signin_btn' onClick={senddata}>Register</button>
                        <hr/>
                        <div className='signin_info'>
                            <p>Already have an account?</p>
                            <NavLink to="/login">SignIn</NavLink>

                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
  )
}

export default SignUp
