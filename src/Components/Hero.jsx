import React, { useContext } from 'react'
import { themeContext } from '../Context/ThemeContext'

export default function Hero() {

  const {bgDarkStyle,textDarkStyle} = useContext(themeContext)

  return (
    <div style={bgDarkStyle}>
    <section className='w-full h-screen flex items-center'  >
        <div className="w-full h-[70%] flex justify-evenly">
        <div className='bg-[url(../photos/banner-item-01.jpg)] w-[30%] h-[100%] bg-center bg-no-repeat bg-cover flex flex-col gap-3 justify-end p-[30px]'>
            <h2 className='uppercase text-[#f48840] text-xl font-medium'>fashion</h2>
            <h3 className='text-white text-2xl font-medium'>Morbi Dapibus Condimentum</h3>
            <p className='text-white text-lg'>Admin | May 12, 2020 | 12 Comments</p>
        </div>
        <div className='bg-[url(../photos/banner-item-02.jpg)] w-[30%] h-[100%] bg-center bg-no-repeat bg-cover flex flex-col gap-3 justify-end p-[30px]'>
            <h2 className='uppercase text-[#f48840] text-xl font-medium'>nature</h2>
            <h3 className='text-white text-2xl font-medium'>Donec Porttitor Augue At Velit</h3>
            <p className='text-white text-lg'>Admin | May 14, 2020 | 24 Comments</p>
        </div>
        <div className='bg-[url(../photos/banner-item-03.jpg)] w-[30%] h-[100%] bg-center bg-no-repeat bg-cover flex flex-col gap-3 justify-end p-[30px]'>
            <h2 className='uppercase text-[#f48840] text-xl font-medium'>lifestyle</h2>
            <h3 className='text-white text-2xl font-medium'>Best HTML Templates In Templatemo</h3>
            <p className='text-white text-lg'>Admin | May 16, 2020 | 36 Comments</p>
        </div>
        </div>
    </section>
    <section className='w-full h-[120px] flex justify-center items-center'>
        <div className='bg-[url(/photos/cta-bg.jpg)] w-[80%] h-[100%] bg-center bg-no-repeat bg-cover flex justify-between items-center px-[35px]'>
            <div>
            <h3 className='text-[#f48840] text-lg font-[700]'>Stand Blog HTML5 Template</h3>
            <h2 className='text-white text-2xl font-[700]'>Creative HTML Template For Bloggers!</h2>
            </div>
            <button className='uppercase bg-[#f48840] text-white p-3'>download now!</button>
        </div>
    </section>
    <section className='w-full h-screen'></section>
    </div>
    )
}
