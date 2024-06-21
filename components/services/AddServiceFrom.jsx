// components/AddServiceForm.js
"use client";
import { ServiceContext } from "@/provider/serviceDataProvider";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const AddServiceForm = () => {
  const { updateServices } = useContext(ServiceContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/servicesdata", data);
      console.log("Service added:", response.data);
      updateServices(); // Update the services list after adding a new service
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <div className='min-h-screen bg-white text-gray-900'>
      <div className='bg-gray-50 py-16 px-6 rounded-lg shadow-lg'>
        <h2 className='text-4xl font-bold mb-8 text-center text-gray-800'>
          Add New Service
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Service Name
            </label>
            <input
              type='text'
              id='name'
              {...register("name", { required: "Service Name is required" })}
              className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
              placeholder='Service Name'
            />
            {errors.name && (
              <span className='text-red-500 text-sm'>
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'
            >
              Description
            </label>
            <textarea
              id='description'
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
              placeholder='Service Description'
            />
            {errors.description && (
              <span className='text-red-500 text-sm'>
                {errors.description.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor='category'
              className='block text-sm font-medium text-gray-700'
            >
              Category
            </label>
            <input
              type='text'
              id='category'
              {...register("category", { required: "Category is required" })}
              className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
              placeholder='Service Category'
            />
            {errors.category && (
              <span className='text-red-500 text-sm'>
                {errors.category.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor='cost'
              className='block text-sm font-medium text-gray-700'
            >
              Cost
            </label>
            <input
              type='number'
              id='cost'
              {...register("cost", { required: "Cost is required" })}
              className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
              placeholder='Service Cost'
            />
            {errors.cost && (
              <span className='text-red-500 text-sm'>
                {errors.cost.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor='image'
              className='block text-sm font-medium text-gray-700'
            >
              Image URL
            </label>
            <input
              type='text'
              id='image'
              {...register("image", { required: "Image URL is required" })}
              className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
              placeholder='Image URL'
            />
            {errors.image && (
              <span className='text-red-500 text-sm'>
                {errors.image.message}
              </span>
            )}
          </div>
          <button
            type='submit'
            className='w-full text-white py-3 px-4 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300'
            style={{
              background: "linear-gradient(50deg, #2d2d2d 1%, #1a1a1a)",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <span>Add Service</span>
          </button>
          {submitted && (
            <p className='text-center text-green-500 mt-4'>
              Service added successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;
