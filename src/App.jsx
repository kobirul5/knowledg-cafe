import { useState } from 'react'
import './App.css'
import Bookmark from './Bookmark/Bookmark'
import Blogs from './compnents/Blogs/Blogs'
import Header from './Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([])
  const handleAddBookmark = blog => {
    const newBlog = [...bookmark, blog]
    setBookmark(newBlog)
  }
console.log(bookmark)
  return (
    <>
      <div className='container mx-auto px-3'><Header></Header></div>
      <div className='md:flex container mx-auto px-3 mt-10'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmark blog = {bookmark}></Bookmark>
      </div>
    </>
  )
}

export default App
