import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    const {title,cover_img, author_name, author_img, read_time,posted_time,hashtag} = blog
    return (
        <div className='space-y-3 p-5 border-b'>
            <div><img className='rounded-lg border' src={cover_img} alt= {`cover picture of title ${title}`} /></div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <div className=''>
                    <img className='w-10 h-10 rounded-full' src={author_img} alt="picture of author" />
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>{author_name}</h2>
                        <p className='text-gray-500'>{posted_time}</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500'>{read_time}</p>
                </div>
            </div>
           <h1 className='text-5xl font-bold '>{title}</h1>
           <div>
            <p className='text-gray-500'>{hashtag}</p>
            </div>
            <button className='text-[#6047EC] border-b border-[#6047EC]'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;