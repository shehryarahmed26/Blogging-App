import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-14 py-4 items-center'>
        <div className="logo">
            <h1 className='text-4xl font-bold'>LOGO.</h1>
        </div>
        <div className="links flex gap-10">
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