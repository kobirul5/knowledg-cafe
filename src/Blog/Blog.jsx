import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <h1>he</h1>
        </div>
    );
};
Blog.prototype = {
    blog: PropTypes.object
}
export default Blog;