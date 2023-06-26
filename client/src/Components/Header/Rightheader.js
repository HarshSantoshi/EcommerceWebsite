import { React, useContext } from 'react';
import './rightheader.css';
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../Context/contextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';

const Rightheader = ({logclose}) => {
    const { account, setAccount } = useContext(LoginContext);
    return (
        <>
            <div className='rightheader'>
                <div className='right_nav'>
                    {
                        account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className='Avatar'></Avatar>
                    }
                    {
                        account ?<h3>Hello, {account.fname.toUpperCase()}</h3>:""
                    }
                </div>
                <div className="nav_btn" onClick={() => logclose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By Category</NavLink>
                    <Divider style={{ width: "100%", marginLeft: -20 }} />
                    <NavLink to="/" style={{ marginTop: 10 }}>Today's Deal</NavLink>
                    {
                        account ? <NavLink to="/buynow">Your Order</NavLink> : <NavLink to="/login">Your Order</NavLink>
                    }
                    <Divider style={{ width: "100%", marginLeft: -20 }} />
                    <div className="flag">
                        <NavLink to="" style={{ marginTop: 14 }}>Settings</NavLink>
                        <img src="" alt="india flag" style={{ width: 35, marginLeft: 10 }} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Rightheader