import Blogdetail from '@/app/components/Blogdetail';
import React from 'react'

const BlogDetail = async ({params}) => {
    // const {blogdetail} = await params;
    // let getblog = await fetch(`https://blogging-app-sh.vercel.app/api/blogs/${blogdetail}`, {cache: 'no-cache'})
    // getblog = await getblog.json()
  return (
    <div>
      <h2>hello</h2>
        {/* <Blogdetail blog={getblog.blog} /> */}
    </div>
  )
}

export default BlogDetail