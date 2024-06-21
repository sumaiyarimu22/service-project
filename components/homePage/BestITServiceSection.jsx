// components/BestITServiceSection.js

import Image from "next/image";

const BestITServiceSection = () => {
  return (
    <section className='bg-gray-900 text-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4'>
            Choose The Best IT Service Company in the City
          </h2>
          <p className='text-lg'>
            Discover why we are the preferred choice for businesses.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          <FeatureCard
            image='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Security First'
            description='We prioritize the security of your data and systems.'
          />
          <FeatureCard
            image='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Expert Solutions'
            description='Delivering tailored IT solutions to meet your needs.'
          />
          <FeatureCard
            image='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Customer Satisfaction'
            description='Our clients trust us for reliable and quality service.'
          />
          <FeatureCard
            image='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Business Growth'
            description='Helping businesses achieve sustainable growth.'
          />
        </div>
      </div>
    </section>
  );
};

// FeatureCard component for each feature
const FeatureCard = ({ image, title, description }) => {
  return (
    <div className='flex items-center'>
      <div className='w-24 h-24 relative rounded-full overflow-hidden'>
        <Image src={image} alt={title} layout='fill' objectFit='cover' />
      </div>
      <div className='ml-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-300'>{description}</p>
      </div>
    </div>
  );
};

export default BestITServiceSection;
