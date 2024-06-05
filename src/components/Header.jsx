import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='bg-primary sticky w-full top-0 h-[75px] py-4 px-[7%] flex items-center justify-between'>
        <img src={Logo} alt="logo" className="h-[4rem] w-[15rem]" />
        <div>
          <button className='text-white text-[2rem] '>Login</button>
        </div>
    </div>
  )
}

export default Header;