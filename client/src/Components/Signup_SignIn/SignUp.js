import React, { useState } from 'react'
import './signin.css'
import { NavLink } from 'react-router-dom'
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
  return (
    <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' alt='Company LOGO' />
                </div>
                <div className='sign_form'>
                    <form>
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
                        <button className='signin_btn'>Register</button>
                        <hr/>
                        <div className='signin_info'>
                            <p>Already have an account?</p>
                            <NavLink to="/login">SignIn</NavLink>

                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default SignUp
