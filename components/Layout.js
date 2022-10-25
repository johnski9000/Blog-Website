import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";

function Layout({ children, title }) {
  const { data: session, status } = useSession();
  console.log(session);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
console.log(status)

  function closeMenu() {
    if (menuOpen === true) {
      setMenuOpen(false);
    }
  }
  <div className="dark-mode-bar">
    <div className="dark-mode-ball"></div>
  </div>;
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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,700;0,800;1,300;1,400;1,500&family=Oswald:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
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
              className="user-image"
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
            src="avatar.png"
            className="menu-image"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute w-48 h-screen top-0 menu">
              <div className="text-white flex w-full h-20 items-center px-6">
                <div className="w-5" onClick={() => setMenuOpen(!menuOpen)}><img src="close.png" className="close-menu"/></div>
                <div></div>
              </div>
              <div className="relative h-3/4">
                <div className="p-6 flex">
                  <img src="/home.png" className="w-6 mobile-menu-logo" />
                  <div className="text-white ml-4">Home</div>
                </div>
                <div className="p-6 flex">
                  <img src="/more.png" className="w-6 mobile-menu-logo" />
                  <div className="text-white ml-4">New Post</div>
                </div>
                <div className="p-6 flex">
                  <img src="/user(2).png" className="w-6 mobile-menu-logo" />
                  <div className="text-white ml-4">Account</div>
                </div>
                <div className="p-6 flex">
                  <img src="/settings.png" className="w-6 mobile-menu-logo" />
                  <div className="text-white ml-4">Settings</div>
                </div>
                <div className="text-white absolute w-full h-24 -bottom-20 flex justify-evenly items-center">
                  <div className="w-8">{session && (
                <img src={session.user.image}/>
               )}
               </div>
                  <div className="w-2/3">
                    <div className="user-details overflow-scroll">{session && (
                session.user.name
               )}</div>
                    <div className="user-details overflow-scroll">{session && (
                session.user.email
               )}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <main className="main-page" onClick={() => closeMenu()}>
        {children}
      </main>
      <footer className="flex justify-between p-2 items-center">
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

