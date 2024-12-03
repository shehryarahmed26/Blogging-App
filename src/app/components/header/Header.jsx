'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [navshadow, setnavshadow] = useState('')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setnavshadow("shadow-md");
      } else {
        setnavshadow("");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures it runs once after component mounts
  return (
    <div className={`flex justify-between px-14 py-4 items-center sticky top-0 bg-white z-10 transition-all ${navshadow}`}>
        <div className="logo">
          <Link href={'/'}>
            <h1 className='text-4xl font-bold'>LOGO.</h1>
          </Link>
        </div>
        <div className="links hidden sm:flex gap-10">
        <Link href={'/'}>
        <p className='font-semibold hover:scale-105 transition-all hover:text-blue-500'>Home</p>
        </Link>
        <Link href={'/features'}>
        <p className='font-semibold hover:scale-105 transition-all hover:text-blue-500'>Features</p>
        </Link>
        <Link href={'/aboutus'}>
        <p className='font-semibold hover:scale-105 transition-all hover:text-blue-500'>Aboutus</p>
        </Link>
        <Link href={'/blogs'}>
        <p className='font-semibold hover:scale-105 transition-all hover:text-blue-500'>Blogs</p>
        </Link>
        </div>
        <div className="auth">
            <Link href={'/signup'}>
        <button className='bg-blue-600 text-white px-4 py-1 rounded font-semibold'>Signup</button>
            </Link>
        </div>
    </div>
  )
}

export default Header