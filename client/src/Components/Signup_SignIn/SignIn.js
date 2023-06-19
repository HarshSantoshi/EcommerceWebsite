import React from 'react'
import './signin.css'

function SignIn() {
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
                            <input type='text' name="email" id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password' >Password</label>
                            <input type='password' name="password" id='password' />
                        </div>
                        <button className='signin_btn'>Login</button>
                    </form>
                </div>
                <div className='create_accountinfo'>
                    <p>New to Amazon ?</p>
                    <button>Create your Amazon Account</button>
                </div>
            </div>
        </section>
    )
}

export default SignIn
