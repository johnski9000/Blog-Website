import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";

function Layout({ children, title }) {
  const { data: session, status } = useSession();

  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    if (menuOpen === true) {
      setMenuOpen(false);
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,100&family=Merriweather:wght@300;400&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Faster+One&display=swap"
          rel="stylesheet"
        />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,700;0,800;1,300;1,400;1,500&family=Oswald:wght@400;500;600&display=swap" rel="stylesheet"/>
</Head>
      <header className="border-b-2 h-16  w-screen flex justify-between fixed z-20">
        <div className="h-14 flex pl-4 title-container">
          <Link href="/">
            <a className="flex justify-center items-center relative">
              <span className="underline-logo"></span>
              <span className="self-center logo">Crime</span>
              <span className="self-center blue logo">Watch</span>
            </a>
          </Link>
          {/* <img src='logo-2.png' alt='' className='w-32 logo'/> */}
        </div>
        <div className="flex-1 flex justify-evenly items-middle ">
          <ul className="hidden md:flex justify-center items-center"></ul>
        </div>
        <div className="hidden md:flex justify-center items-center relative">
          <div className="w-1/2">
            <input
              placeholder="Search..."
              className="w-full p-1 text-s rounded-3xl outline-none search-input"
            />
            <img src="search(1).png" className="absolute w-4 search-icon" />
          </div>
          <div className="pl-6">
            <img
              src="./avatar.png"
              className="w-10 user-image"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolut menu-pc z-0">
                <div className="w-full h-4/5 relative flex justify-evenly items-center flex-col ">
                  <Link href="/account">
                    <a className=" list-item-custom ">
                      <div>Account</div>
                    </a>
                  </Link>
                  <div className="block   list-item-custom">New Post</div>
                  {session ? (
                    <div
                      className=" list-item-custom hover:cursor-pointer"
                      onClick={() => signOut()}
                    >
                      Log Out
                    </div>
                  ) : (
                    <Link href="/login">
                      <a className=" list-item-custom ">
                        <div>Login</div>
                      </a>
                    </Link>
                  )}
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
      <main className="main-page" onClick={() => closeMenu()}>
        {children}
      </main>
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
