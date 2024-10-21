import PropTypes from 'prop-types';
import Bmark from '../Bmark/bmark';
const Bookmark = ({blog}) => {
    
    return (
        <div className='md:w-1/3'>
            <div className='py-5 px-11 bg-[#6047EC1A] rounded-xl mb-6'><h2>BookMark Blog:- {blog.length}</h2></div>
            <div className='bg-[#1111110D] p-8 rounded-xl space-y-4'>

            {
                blog.map(bookmark=><Bmark
                key={bookmark.id}
                bookmark={bookmark}
                ></Bmark>)
            }
            </div>
        </div>
    );
};
Bookmark.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Bookmark;