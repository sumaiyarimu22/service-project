// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='bg-gray-800 shadow-lg'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='text-white text-lg font-bold'>
              IT Services
            </Link>
          </div>

          {/* Navigation links */}
          <div className='hidden sm:block sm:ml-6'>
            <div className='flex space-x-4'>
              <NavLink href='/' text='Home' />
              <NavLink href='/services' text='Services' />
              <NavLink href='/contact' text='Contact' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Custom NavLink component
const NavLink = ({ href, text }) => (
  <Link href={href} className='text-gray-300 hover:text-white'>
    {text}
  </Link>
);

export default Navbar;
