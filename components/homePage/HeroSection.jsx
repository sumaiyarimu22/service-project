// components/HeroSection.js

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className='bg-gray-900 text-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4'>
              Innovative IT Solutions
            </h1>
            <p className='text-lg mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              suscipit dolor quis leo auctor, id posuere urna sodales.
            </p>
            <div className='mt-10'>
              <Link
                href='/services'
                className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 '
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className='md:w-1/2'>
            <Image
              src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Hero Image'
              className='rounded-lg shadow-lg '
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
