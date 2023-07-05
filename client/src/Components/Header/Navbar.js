import React, { useEffect, useState } from 'react';
import "./navbar.css";
import Rightheader from "./Rightheader";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { LoginContext } from '../Context/contextProvider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import shopzone from "../image/shopzone_logo.png";

const Navbar = () => {
  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);
  const history = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [text, setText] = useState("");
  const [listopen , setlistOpen] = useState(true);
  const {products} = useSelector(state => state.getproductsdata);
  const [dropen, setDropen] = useState(false)

  const getdetailsvaliduser = async () => {
    const res = await fetch("/validateuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    const data = await res.json();
    if (res.status !== 201) {
      console.log("error");
    } else {
      console.log("data valid");
      setAccount(data);
    }
  };

  const handleopen = () => {
    setDropen(true)
  }
  const handledrclose = () => {
    setDropen(false)
  }
  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    const data2 = await res2.json();
    if (res2.status !== 201) {
      console.log("error");
    } else {
      toast.success("Logout Successfully", {
        position: "top-center"
      });
      history("/")
      setAccount(false);
    
    }
  }
  const getText = (items)=>{
    setText(items);
    setlistOpen(false);
  }
  useEffect(() => {
    getdetailsvaliduser()
  }, [])
  return (
    <div>
      <header>
        <nav>
          <div className='left'>
            <IconButton
              className='hamburgur'
              onClick={handleopen}
            >

              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
            <Drawer open={dropen} onClose={handledrclose}>
              <Rightheader logclose={handledrclose} logoutuser ={logoutuser}/>
            </Drawer>
            <div className='navlogo'>
              <NavLink to="/"><img src={shopzone} alt='Logo' /></NavLink>
            </div>
            <div>
              <div className='nav_searchbar'>
                <input type="text" name="" id="" placeholder="Search Your Products" 
                onChange={(e)=>getText(e.target.value)}
                />
                <div className='search_icon'>
                  <SearchIcon />
                </div>
                {
                  text && 
                  <List className='extrasearch' hidden={listopen}>
                    {
                      products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                        <NavLink to= {`/getproductsone/${product.id}`} onClick={()=>setlistOpen(true)}>  
                           <ListItem>
                          {
                            product.title.longTitle
                          }
                        </ListItem>
                        </NavLink>
                       
                      ))
                    }
                  </List>
                }
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='nav_btn'>
              <NavLink to='/login'>Sign in</NavLink>
            </div>
            <div className='cart_btn'>
              {
                account ? <NavLink to="/buynow">
                  <Badge badgeContent={account.carts.length} color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge>
                </NavLink> : <NavLink to="/login">
                  <Badge badgeContent={0} color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge>
                </NavLink>
              }
              <p>
                Cart
              </p>
            </div>
            {
              account ? <Avatar className='avtar2'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>{account.fname[0].toUpperCase()}</Avatar> :
                <Avatar className='Avatar'
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}></Avatar>
            }
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              {
                account ? <MenuItem  onClick={logoutuser}><LogoutIcon style={{ fontSize: 16, marginRight: 16 }} />Logout</MenuItem> : ""
              }

            </Menu>
          </div>
        </nav>
      </header>
      <ToastContainer />
    </div>
  )
}

export default Navbar
