import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar bg-base-100'>
      <Link to='/'>
        <span className='btn btn-ghost text-xl'>Event Scheduler</span>
      </Link>
      <Link to='signin'>
        <button className='btn btn-primary'>Sign In</button>
      </Link>
    </div>
  );
};

export default NavBar;
