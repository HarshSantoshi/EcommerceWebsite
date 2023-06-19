import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import  Badge  from '@mui/material/Badge';
import Avatar  from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
            <div className='left'>
               <div className='navlogo'>
               <img src="	" alt='Logo'/>
               </div>
               <div>
                <div className='nav_searchbar'>
                    <input type = "text" name = "" id ="" placeholder ="Search Your Products" />
                    <div className='search_icon'>
                        <SearchIcon/>
                    </div>
                </div>
               </div>
            </div>
            <div className='right'>
                <div className='nav_btn'>
                    <a href=''>Sign in</a>
                </div>
                <div className='cart_btn'>
                    <Badge badgeContent={4} color ="primary">
                        <ShoppingCartIcon id="icon"/>
                    </Badge>
                    <p>
                        Cart
                    </p>
                </div>
                <Avatar className='Avatar'/>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
