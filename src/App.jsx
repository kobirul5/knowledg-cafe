import { useState } from 'react'
import './App.css'
import Bookmark from './Bookmark/Bookmark'
import Blogs from './compnents/Blogs/Blogs'
import Header from './Header/Header'

function App() {
  const [blog, setBlogs] = useState([])
  const handleAddBookmark = () => {
    console.log('handle add')
  }

  return (
    <>
      <div className='container mx-auto px-3'><Header></Header></div>
      <div className='md:flex container mx-auto px-3'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
