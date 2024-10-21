import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="text-2xl font-bold w-2/3">
            <h2>Blog:- {blogs.length}</h2>
            <Blog></Blog>
        </div>
    );
};

export default Blogs;