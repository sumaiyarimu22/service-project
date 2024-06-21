import {
  FaNetworkWired,
  FaUserShield,
  FaHandsHelping,
  FaSmile,
} from "react-icons/fa";
const WhyChooseUsSection = () => {
  return (
    <div className='my-20 bg-white text-gray-900'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <h1 className='text-4xl font-bold mb-6'>The Our IT Difference</h1>
        <p className='text-lg mb-8'>
          For over a decade, we&lsquo;ve been a leading IT service provider,
          earning and maintaining the trust of businesses and individuals in
          Saskatoon, Martensville, Warman, and surrounding areas.
        </p>
        <div className='flex space-x-6 mb-6'>
          <a
            href='tel:your-phone-number'
            className='text-red-600 hover:underline'
          >
            Call Now
          </a>
          <a href='#' className='text-red-600 hover:underline'>
            Book Free Consultation
          </a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex items-start'>
            <div className='flex-shrink-0 p-2 bg-blue-100 rounded-full'>
              <FaNetworkWired className='w-6 h-6 text-blue-500' />
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-semibold'>Network Solutions</h2>
              <p>
                Experience reliable and efficient network solutions tailored to
                your business needs.
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='flex-shrink-0 p-2 bg-green-100 rounded-full'>
              <FaUserShield className='w-6 h-6 text-green-500' />
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-semibold'>Cybersecurity</h2>
              <p>
                Protect your digital assets with our top-notch cybersecurity
                services and solutions.
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='flex-shrink-0 p-2 bg-yellow-100 rounded-full'>
              <FaHandsHelping className='w-6 h-6 text-yellow-500' />
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-semibold'>24/7 Support</h2>
              <p>
                Don Don&lsquo;t let technical issues disrupt your operations—our
                support team is available 24/7.t let technical issues disrupt
                your operations—our support team is available 24/7.
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='flex-shrink-0 p-2 bg-purple-100 rounded-full'>
              <FaSmile className='w-6 h-6 text-purple-500' />
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-semibold'>Customer Satisfaction</h2>
              <p>
                Our clients love us! See what they have to say about our
                exceptional services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
