import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handlelogOut = () =>{
    logOut()
    .then(() =>{

    })
    .catch(error =>console.error(error))
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
             <div className='bg-sky-50'>
      <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
    <div className='relative flex items-center justify-between'>
        <Link to='/' className='inline-flex items-center'>
            <span className='ml-2 font-serif text-3xl font-bold tracking-wide text-gray-800'>
             Tasty Food
            </span>
          </Link>
          
          <ul className='items-center text-xl font-semi-bold hidden space-x-8 lg:flex'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blogs'
                className={({ isActive }) => (isActive ? 'active' : 'default')}>Blogs</NavLink>
            </li>  
          </ul>
        
          {
              user? <>
              <span>{user.email} </span>
              <button onClick={handlelogOut}  className='btn btn-primary btn-outline'>
              Sign Out
              </button></> : <button className='btn btn-primary btn-outline'><Link to="/login">Login</Link></button>
              
            }
            
            {/* Mobile Navbar Section */}
          <div className='lg:hidden'>
            {/* Dropdown Open Button */}
            <button
              aria-label='Open Menu'
              title='Open Menu'
              onClick={() => setIsMenuOpen(true)}>
              <Bars3BottomRightIcon className='w-5 text-gray-600' />
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  {/* Logo & Button section */}
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <Link to='/' className='inline-flex items-center'>
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Tasty Food
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        onClick={() => setIsMenuOpen(false)}>
                        <XMarkIcon className='w-5 text-gray-600' />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <Link to='/' className='default'>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>Blogs</Link>
                      </li>
                      <li>
                        <Link
                          to='/login'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>Login</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Header;