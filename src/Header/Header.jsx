import Profile from '../../src/assets/images/profile.png';
const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center border-2 p-4 px-4">
                <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={Profile} alt="" />
            </div>
        </div>
    );
};

export default Header;