import './navbar.scss';
import '../../styles/_ultilities.scss';

const Navbar = () => {
  return (
    <div className='nav u-flex-between'>
      <div className='nav__logo'>
        <a href='#'>
          <img src='logo.svg' alt='admin logo' />
        </a>
        <a href='#'>lamadmin</a>
      </div>
      <div className='nav__icons'>
        <img src='/search.svg' alt='navbar icon' className='nav__icon' />
        <img src='/app.svg' alt='navbar icon' className='nav__icon' />
        <img src='/expand.svg' alt='navbar icon' className='nav__icon' />
        <div className='nav__noti'>
          <img
            src='/notifications.svg'
            alt='navbar icon'
            className='nav__icon'
          />
          <span className='u-flex-center'>1</span>
        </div>
        <div className='nav__user'>
          <img
            src='https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
            alt='User photo'
          />
          <span>Jane</span>
        </div>
        <img src='/setting.svg' alt='navbar icon' className='nav__icon' />
      </div>
    </div>
  );
};
export default Navbar;
