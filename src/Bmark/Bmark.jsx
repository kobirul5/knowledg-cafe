import PropTypes from 'prop-types';
const Bmark = ({bookmark}) => {

    return (
        <div>
                <div className='bg-white p-5 rounded-xl '>
                    <h3>{bookmark.title}</h3>
                </div>
                
        </div>
    );
};
Bmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bmark;