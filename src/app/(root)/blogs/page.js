import Blogcard from '@/app/components/blogcard'
import Header from '@/app/components/header/Header'
import React from 'react'

const Blogs = async () => {
  let allblogs = await fetch('https://blogging-app-sh.vercel.app/api/blogs')
  allblogs = await allblogs.json()
  const blogs = allblogs.blogs
  return (
    <div>  
      <Header/>
      <h2 className='text-center text-2xl sm:text-4xl text-gray-950 pb-10 pt-4'>Explore Blogs</h2>
      <div className='flex flex-wrap justify-center gap-6'>
        {allblogs ? 
          blogs.map((blog) => (
            <Blogcard key={blog._id} blog={blog} />
          )) :
          <div>No blogs available</div>
        }
      </div>
      </div>
  )
}

export default Blogs