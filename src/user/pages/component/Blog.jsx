import React from 'react'
import { Blogdata, Paragrap } from '../../../atoms/Atoms'

const Blog = ({img,title}) => {
  return (
    <div>
      <div className="blog-card">
        <div className="blog-img">
            <img src={img} alt="blog image" />
        </div>
        <div className="blog-data">
            <Blogdata content={title} style="blogdata" />
            <p>by<a href="javascript:void(0)"  className='px-1'>ecommerce Themes</a><Paragrap content="/ 30 Oct 2017" style="paragrapp d-inline" /></p>
            <Paragrap content="Maria Denardo is the Fashion Director at theFashionSpot. Prior to joining tFS, she worked as..." style="paragrapp"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
