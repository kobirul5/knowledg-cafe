import './App.css'
import Bookmark from './Bookmark/Bookmark'
import Blogs from './compnents/Blogs/Blogs'
import Header from './Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex '>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
