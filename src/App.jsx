import { useCallback, useState } from 'react'
import './App.css'
import Bookmark from './Bookmark/Bookmark'
import Blogs from './compnents/Blogs/Blogs'
import Header from './Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([])
  const [readTime, setReadTime] = useState(0)


  const handleAddBookmark = blog => {
    const newBlog = [...bookmark, blog]
    setBookmark(newBlog)
  }


const handleReadTime = time => {
  const newReadTime = readTime + parseInt(time)
  setReadTime(newReadTime)
}
console.log(readTime)
  return (
    <>
      <div className='container mx-auto px-3'><Header></Header></div>
      <div className='md:flex container mx-auto px-3 mt-10'>
      <Blogs handleAddBookmark={handleAddBookmark} handleReadTime= {handleReadTime}></Blogs>
      <Bookmark blog = {bookmark} readTime ={readTime}></Bookmark>
      </div>
    </>
  )
}

export default App
