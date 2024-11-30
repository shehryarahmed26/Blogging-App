import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Herosection from './components/herosection'
import Featuredblogs from './components/featured-blogs'
import Testinomials from './components/Testinomials'

const page = () => {
  return (
    <div>
        <Header/>
        <Herosection/>
        <Featuredblogs/>
        <Testinomials/>
       <Footer/>
    </div>
  )
}

export default page