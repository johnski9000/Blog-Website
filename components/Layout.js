import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

function Layout({ children, title }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu () {
    if (menuOpen === true) {
        setMenuOpen(false)
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,900;1,700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <header className="border-b-2 h-16  w-screen flex justify-between fixed z-20 bg-white">
        <div className="h-14 flex pl-4 title-container">
          {/* <img src='logo-2.png' alt='' className='w-32 logo'/> */}
          <span className="self-center font-black">Crime</span>
          <span className="self-center blue font-bold italic">Watch</span>
        </div>
        <div className="flex-1 flex justify-center items-middle ">
          <ul className="hidden md:flex justify-center items-center">
          </ul>
        </div>
        <div className="hidden md:flex justify-center items-center relative">
          <div className="w-1/2">
            <input
              placeholder="Search..."
              className="w-full p-1 pl-7 text-s rounded-3xl outline-none"
            />
            <img src="search.png" className="absolute w-4 search-icon" />
          </div>
          <div>
                      <img src="./user.png" className="w-8 user-image" onClick={() => setMenuOpen(!menuOpen)}/>
                      {menuOpen && (
            <div className="absolut menu-pc z-0">
              <div className="w-full h-full relative ">
                        <Link href="/login"><a><div className="block text-white text-center hover:bg-black hover:text-rose-600 font-bold list-item-custom">Account</div></a></Link>
                        <div className="block text-white text-center hover:bg-black hover:text-rose-600 font-bold list-item-custom">New Post</div>
                        <div className="block text-white text-center hover:bg-black hover:text-rose-600 font-bold list-item-custom">Login</div>
              </div>
            </div>
          )}
          </div>
        </div>
        <div className="md:hidden w-24 flex justify-center items-center relative">
            
          <img
            src="menu.png"
            className="w-1/4"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute bg-blue-50 w-32 h-screen top-0 menu">
              <div>asda</div>
            </div>
          )}
        </div>
      </header>
      <main className="main-page" onClick={() => closeMenu()}>{children}</main>
      <footer className="border-t-2 flex justify-between p-2 items-center">
        <div className="text-xs">JW Blog @ 2022 All Rights Reserved</div>
        <ul className="footer-list">
          <li>Home</li>
          <li>About us</li>
          <li>Privacy</li>
          <li>Contact us</li>
        </ul>
      </footer>
    </>
  );
}

export default Layout;
