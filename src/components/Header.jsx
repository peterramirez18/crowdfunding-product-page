import React from 'react'

// import assets
import Logo from "../assets/images/logo.svg"
import MenuIcon from "../assets/images/icon-hamburger.svg"
const Header = () => {

  const nav = ['About', 'Discover', 'Get Started']
  return (
    <div className=' w-[100vw] pt-8 md:pt-12 absolute flex items-center justify-center'>
      <div className='  w-[1184px] px-8 flex justify-between items-center'>
        <img src={Logo} alt="logo" />

        {/* nav */}
        <nav>
          <ul className='text-white gap-x-7 hidden md:flex'>
            {nav.map((item, index) => {
              return (
                <li className=' cursor-pointer' key={index}>{item}</li>
              )
            })}
          </ul>
        </nav>

        {/* icon menu */}
        <img className='flex md:hidden' src={MenuIcon} alt="icon-menu" />
      </div>
    </div>
  )
}

export default Header