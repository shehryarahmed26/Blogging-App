import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const Herosection = () => {
    const heroimg = 'https://img.freepik.com/premium-vector/animation-designer-computer-with-video-motion-design-screen_103044-6564.jpg?ga=GA1.1.1486585058.1732891954&semt=ais_hybrid'

  return (
    <section className="flex  flex-col sm:flex-row px-6 py-6 sm:py-16">
    <div className="container text-center sm:text-start flex-col mx-auto px-6 w-[100%] sm:w-[60%] items-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-6xl font-extrabold text-gray-800">
        Welcome to our <span className="text-blue-500">Blogsapp</span>
      </h1>
  
      {/* Subheading */}
      <p className="mt-6 text-sm sm:text-xl text-gray-600">
        Discover powerful stories, trending ideas, and valuable insights written 
        by experts and enthusiasts. Your go-to platform for inspiration and 
        knowledge.
      </p>
  
      {/* Call-to-Action */}
      <div className="mt-8">
        <Link href={'/blogs'}>
        <button className="px-4 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-700">
          Explore Blogs
        </button>
        </Link>
      </div>
    </div>
    <div className="right w-[100%] sm:w-[50%] ">
    <Image width={500} height={200} src={heroimg}  />
    </div>
  </section>
  )
}

export default Herosection