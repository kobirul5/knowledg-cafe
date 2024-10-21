import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = ({handleAddBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl font-bold">Blog:- {blogs.length}</h2>
            <div className=" md:w-2/3">
            {
                blogs.map(blog=> <Blog 
                    key = {blog.id}
                    blog={blog} 
                    handleAddBookmark={handleAddBookmark}
                ></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;