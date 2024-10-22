import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark, handleReadTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl font-bold ">Blog:- {blogs.length}</h2>
            <div className="">
            {
                blogs.map(blog=> <Blog 
                    key = {blog.id}
                    blog={blog} 
                    handleAddBookmark={handleAddBookmark}
                    handleReadTime= {handleReadTime}
                ></Blog>)
            }
        </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func
}

export default Blogs;