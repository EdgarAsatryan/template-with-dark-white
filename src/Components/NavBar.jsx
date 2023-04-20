import React, { useContext, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { themeContext } from '../Context/ThemeContext'



function NavBar() {
    const [navBar,setnavBar] = useState(true)
    const changeBackground = () => {
        if (window.scrollY > 20) {
            setnavBar(false)
        }else{
            setnavBar(true)
        }
    }
    window.addEventListener("scroll",changeBackground)

  const {bulean, handleBuleanChange, bgDarkStyle, textDarkStyle} = useContext(themeContext)
  return (
    <header className={navBar ? 'w-full h-[80px] bg-gray-200 flex justify-center items-center fixed' : 'w-full h-[80px] bg-transparent flex justify-center items-center fixed'} style={bgDarkStyle}>
        <nav className='w-[80%] h-full flex justify-between items-center'>
        <a href="#" className='text-3xl font-semibold' style={textDarkStyle}>STAND BLOG<span className='text-[#f48840]'>.</span></a>
        <ul className='flex gap-7 text-lg font-[700] text-[black]' style={textDarkStyle}>
            <li className="hover:text-[#f48840] transition-all"><a href="#" className="">HOME</a></li>
            <li className="hover:text-[#f48840] transition-all"><a href="#" className="">ABOUT US</a></li>
            <li className="hover:text-[#f48840] transition-all"><a href="#" className="">BLOG ENTERIES</a></li>
            <li className="hover:text-[#f48840] transition-all"><a href="#" className="">POST DETAILS</a></li>
            <li className="hover:text-[#f48840] transition-all"><a href="#" className="">CONTACT US</a></li>
            <li className='flex items-center'><span className=' cursor-pointer'onClick={handleBuleanChange}>
                {
                    bulean ? <BsSun className=' w-5 h-5'/> : <BsMoon className=' w-5 h-5' />
                }
            </span></li>
        </ul>
        </nav>
    </header>
    )
}

export default NavBar