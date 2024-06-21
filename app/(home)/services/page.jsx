"use client";

import ServiceCard from "@/components/services/serviceCard";
import { ServiceContext } from "@/provider/serviceDataProvider";

import { useContext } from "react";

const ServicesPage = () => {
  const { services } = useContext(ServiceContext);
  console.log(services);
  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-3xl font-bold text-gray-800 my-8'>Services</h1>{" "}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {services?.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
