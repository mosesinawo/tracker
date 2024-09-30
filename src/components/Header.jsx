import React from 'react'
import Logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-primary z-50 w-full top-0 h-[75px] py-4 px-[7%] flex items-center justify-between'>
       <NavLink to="/">
       <img src="/faanlogo.svg" alt="logo" className="h-[4rem] w-[15rem]" />
       </NavLink>
        <div>
          <button className='text-white text-[2rem] '>Login</button>
        </div>
    </div>
  )
}

export default Header;