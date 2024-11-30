import Link from 'next/link'
import React from 'react'

const Blogcard = ({blog}) => {
  return (
    <div className='w-[90%] sm:w-[46%]  border border-gray-800 py-6 px-6 rounded'>
              <h3 className='text-2xl sm:text-4xl'>{blog.title}</h3>
              <p className='h-[50px] overflow-hidden my-4 text-gray-700'>{blog?.body}</p>
              <Link href={`/blogs/${blog._id}`}>
              <button className='border text-sm border-black px-2 rounded py-1 hover:border-blue-500 hover:text-blue-500 transition-all'>Read More...</button>
              </Link>
            </div>
  )
}

export default Blogcard