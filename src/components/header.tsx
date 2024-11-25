'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import '../style/header.css'
import Image from 'next/image';
import {Bars4Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';


const Header = () => {
    const [nav, setNav] = useState(false);

  return (
   <section className='header-section'>
    <div className="header">

        {/* LOGO */}
        <div className="logo">
            <div className="logo-img">
                <Image 
                src= '/images/log.png' alt='logo'
                width={80}
                height={80}
                />
            </div>
            
            <h1>Cafe110</h1>
            </div>

          {/* NAV LINKS */}

        <div className="nav-links">
            <ul>
                <li> <Link href='/'>HOME</Link></li>
                <li> <Link href='#about'>ABOUT</Link></li>
                <li> <Link href='#tea'>MENU</Link></li>
                <li> <Link href='#blog'>BLOG</Link></li>
                <li> <Link href='#contact'>CONTACT</Link></li>
                
            </ul>
          </div>  
        <div className="right-cor">
        <div className="btn">
              <button>Login</button>
            </div>

         {/* search icon */}
        <div className="search-icon" >
            <MagnifyingGlassIcon />
        </div>
        </div>
         {/* HambergerMenu */}

         <div className="menu" onClick={() => setNav(!nav)}>
        {nav ? <XMarkIcon className="icon" /> : <Bars4Icon className="icon" />}
      </div>

      {nav && (
        <div className="mob">
          <nav className="mob-links">
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="#about">ABOUT</Link></li>
              <li><Link href="#tea">MENU</Link></li>
              <li><Link href="#blog">BLOG</Link></li>
              <li><Link href="#contact">CONTACT</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
   </section>
  )
}

export default Header;
