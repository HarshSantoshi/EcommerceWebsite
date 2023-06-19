import React, { useState } from 'react'
import './signin.css'
import {NavLink} from 'react-router-dom'
function SignIn() {
    const [data , setData]= useState({
        email:"",
        password:""
    });
    console.log(data);
    const addData = (e)=>{
        const {name , value}  = e.target;
        setData(()=>{
            return {
                ...data,
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
                        <h1>Sign-In</h1>
                        <div className='form_data'>
                            <label htmlFor='email' >Email</label>
                            <input type='text' 
                            onChange={addData}
                            value={data.email}
                            name="email" id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password' >Password</label>
                            <input type='password'
                            onChange={addData}
                            value={data.password}
                            name="password" id='password' placeholder='At least 6 characters' />
                        </div>
                        <button className='signin_btn'>Login</button>
                    </form>
                </div>
                <div className='create_accountinfo'>
                    <p>New to Amazon ?</p>
                   <NavLink to= "/signup" ><button>Create your Amazon Account</button></NavLink>
                </div>
            </div>
        </section>
    )
}

export default SignIn
