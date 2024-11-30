import React from 'react'
import Header from './header/Header'
import Footer from './footer/footer'

const Blogdetail = ({blog}) => {
  return (
    <div className='px-10'>
        <Header/>
        <div className='min-h-screen'>
            <div className='flex justify-end gap-4 my-6'>
                <button className='bg-green-600 text-white px-6 py-1 rounded'>Edit</button>
                <button className='bg-red-600 text-white px-6 py-1 rounded'>Delete</button>
            </div>
        <h2 className='text-5xl font-semibold text-center my-8'>{blog.title}</h2>
        <p className='text-center text-gray-700 px-6'>{blog.body}</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blogdetail