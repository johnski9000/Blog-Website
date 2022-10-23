import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";

function Layout({ children, title }) {
  const { data: session, status } = useSession()
  console.log(session)
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
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,100&family=Merriweather:wght@300;400&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <header className="border-b-2 h-16  w-screen flex justify-between fixed z-20 bg-white">
        <div className="h-14 flex pl-4 title-container">
          <Link href="/"><a className="flex justify-center items-center">
                      <span className="self-center font-black">Crime</span>
          <span className="self-center blue font-bold ">Watch</span>
            </a></Link>
          {/* <img src='logo-2.png' alt='' className='w-32 logo'/> */}

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
              <div className="w-full h-4/5 relative flex justify-evenly items-center flex-col ">
                        <Link href="/account"><a className=" list-item-custom "><div>Account</div></a></Link>
                        <div className="block   list-item-custom">New Post</div>
                        { session ?
                            <div className=" list-item-custom hover:cursor-pointer" onClick={() => signOut()}>Log Out</div>
                          : 
                          <Link href="/login"><a className=" list-item-custom "><div >Login</div></a></Link>
                          }
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
              <div className="w-full h-full flex flex-col">
    <div className="flex h-28" >
        <div className="flex justify-center items-center w-1/2">image</div>
        <div className="flex flex-col justify-center items-center">
            <p>username</p>
            <p>name</p>
        </div>
    </div>
</div>
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
