import React, { useState } from 'react'
import Link from "next/link"

function Layout({children}) {

    const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
    
        <header className='border-b-2 h-16  w-screen flex justify-between'>
            <div className='h-14'>
                <img src='logo-2.png' alt='' className='w-32 logo'/>
            </div>
            <div className='flex-1 flex justify-center items-middle'>
                <ul className='hidden md:flex justify-center items-center'>
                    <li className='px-4 text-s text-slate-600 hover:text-blue-500'>Recently Published</li>
                    <li className='px-4 text-s text-slate-600 hover:text-blue-500'>Popular</li>
                    <li className='px-4 text-s text-slate-600 hover:text-blue-500'>Something Else</li>
                </ul>
            </div>
            <div className='hidden md:flex justify-center items-center relative'>
                <div className='w-1/2'>
                                <input placeholder="Search..." className='w-full p-1 pl-7 text-s rounded-3xl outline-none'/>
                    <img src="search.png" className='absolute w-4 search-icon'/>
                </div>
            <img src="./user.png" className='w-8 ml-4'/>
            </div>
            <div className='md:hidden w-24 flex justify-center items-center relative'><img src='menu.png' className='w-1/4' onClick={() => setMenuOpen(!menuOpen)}/>
                {
                    menuOpen && (
                        <div className='absolute bg-blue-50 w-32 h-screen top-0'>

                        </div>
                    )
                }
            </div>
        </header>
        <main className='main-page'>
            {children}
        </main>
        <footer className='border-t-2 flex justify-between p-2 items-center'>
            <div className='text-xs'>
                                JW Blog @ 2022 All Rights Reserved
            </div>
            <ul className="footer-list">
                <li>Home</li>
                <li>About us</li>
                <li>Privacy</li>
                <li>Contact us</li>
            </ul>
        </footer>
    </>
  )
}

export default Layout