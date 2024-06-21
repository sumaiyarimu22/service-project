import Image from "next/image";
import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <Image
        width={800}
        height={600}
        src={item.image}
        alt={item.name}
        objectFit='cover'
        className='w-full h-44 object-cover object-center'
      />
      <div className='p-4'>
        <h2 className='text-xl font-bold text-gray-800 mb-2'>{item.name}</h2>
        <p className='text-gray-600 text-sm mb-2'>{item.category}</p>
        <p className='text-gray-700 mb-4'>{item.description}</p>
        <div className='flex justify-between items-center'>
          <p className='text-gray-600 text-sm'>
            Cost per product: ${item.cost}
          </p>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
