import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar bg-base-100'>
      <Link to='/' className='flex-1'>
        <span className='btn btn-ghost text-xl'>Event Scheduler</span>
      </Link>
      <div className='gap-4'>
        <Link to='create'>
          <button className='btn btn-outline btn-primary'>Create Event</button>
        </Link>
        <Link to='signin'>
          <button className='btn btn-primary'>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
