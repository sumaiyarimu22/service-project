"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane, // Add this import
} from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // <- Add parentheses here

  const [submitted, setSubmitted] = useState(false); // Add state for submitted

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/contact", data);
      console.log("Contact information added:", response.data);
      reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding contact information:", error);
    }
  };

  return (
    <div className='min-h-screen bg-white text-gray-900'>
      <div className='bg-gray-50 py-16 px-6 rounded-lg shadow-lg'>
        <h2 className='text-4xl font-bold mb-8 text-center text-gray-800'>
          Get in Touch!
        </h2>
        <p className='text-center mb-8 text-gray-600'>
          It’s very easy to contact us. Just use the form below or reach out
          using one of the methods listed.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <div className='flex items-center'>
              <FaPhone className='w-8 h-8 text-gray-700 mr-4' />
              <span className='text-lg text-gray-700'>9296429246</span>
            </div>
            <div className='flex items-center'>
              <FaEnvelope className='w-8 h-8 text-gray-700 mr-4' />
              <span className='text-lg text-gray-700'>
                contact@dlawerit.com
              </span>
            </div>
            <div className='flex items-center'>
              <FaMapMarkerAlt className='w-8 h-8 text-gray-700 mr-4' />
              <span className='text-lg text-gray-700'>
                456 Tech Ave, Saskatoon, SK
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                {...register("name", { required: "Name is required" })}
                className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                placeholder='Your Name'
              />
              {errors.name && (
                <span className='text-red-500 text-sm'>
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                placeholder='you@example.com'
              />
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Message
              </label>
              <textarea
                id='message'
                {...register("message", { required: "Message is required" })}
                rows={4}
                className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                placeholder='Your message...'
              />
              {errors.message && (
                <span className='text-red-500 text-sm'>
                  {errors.message.message}
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
              <span>Send Message Now</span>
              <FaPaperPlane className='ml-2' />
            </button>
            {submitted && (
              <p className='text-center text-green-500 mt-4'>
                Thank you for your message!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
