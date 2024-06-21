// components/KeyMetricsSection.js

const KeyMetricsSection = () => {
  return (
    <section className='bg-gray-100 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          <StatCard number='5K+' label='Happy clients' />
          <StatCard number='18+' label='Awards Winner' />
          <StatCard number='50+' label='Branches' />
          <StatCard number='179+' label='Team members' />
        </div>
      </div>
    </section>
  );
};

// StatCard component for each statistic
const StatCard = ({ number, label }) => {
  return (
    <div className='bg-white rounded-lg p-6 shadow-lg text-center'>
      <p className='text-3xl font-semibold'>{number}</p>
      <p className='text-gray-600'>{label}</p>
    </div>
  );
};

export default KeyMetricsSection;
