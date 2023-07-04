import { React, useContext } from 'react';
import './rightheader.css';
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../Context/contextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Rightheader = ({logclose ,logoutuser}) => {
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
                        <NavLink to="/" style={{ marginTop: 14 }}>Settings</NavLink>
                        <img src="https://th.bing.com/th/id/OIP.mj6ZxHH_YhezE3baAh0MNwHaEs?pid=ImgDet&rs=1" alt="indian flag" style={{ width: 35, marginLeft: 10 }} />
                    </div>

                    {
                        account ? 
                        <div className='flag'>
                            <LogoutIcon style={{fontSize:18 , marginRight:4 , cursor:"pointer"}}/>
                            <h3 onClick={()=>logoutuser()} style={{cursor:"pointer" , fontWeight:500 , fontSize:18}}>Logout</h3>
                        </div>
                        :
                        <NavLink to = "/login">Login</NavLink>
                    }

                </div>
            </div>
        </>
    )
}

export default Rightheader