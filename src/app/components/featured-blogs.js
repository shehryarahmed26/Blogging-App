import React from 'react'
import Blogcard from './blogcard';

const Featuredblogs = async () => {
    let featuredblogs = await fetch('http://localhost:3000/api/blogs')
    featuredblogs = await featuredblogs.json();
    const fewblogs = featuredblogs?.blogs.splice(0, 3)
    console.log(fewblogs);
    
    console.log(featuredblogs?.blogs);
    
  return (
    <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            Featured Blogs
          </h2>
         <div className='w-full flex flex-wrap justify-center gap-6 '>
          {fewblogs.map((blog) => (
            <Blogcard key={blog._id} blog={blog}/>
          ))}
         </div>
        </div>
      </section>
  )
}

export default Featuredblogs