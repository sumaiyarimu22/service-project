"use client";
import { ServiceContext } from "@/provider/serviceDataProvider";
import Image from "next/image";
import React, { useContext } from "react";

const AllProduct = () => {
  const { services } = useContext(ServiceContext);

  return (
    <div className='max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-4'>
      <h1 className='text-2xl font-bold mb-4'>Services List</h1>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Description
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Category
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Cost
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Image
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {services?.map((service) => (
            <tr key={service.id}>
              <td className='px-6 py-4 '>{service.name}</td>
              <td className='px-6 py-4 '>{service.description}</td>
              <td className='px-6 py-4 '>{service.category}</td>
              <td className='px-6 py-4 '>${service.cost}</td>
              <td className='px-6 py-4 '>
                <div className='w-20 h-20 overflow-hidden rounded-full'>
                  <Image
                    width={100}
                    height={100}
                    src={service.image}
                    alt={service.name}
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
