// components/ContactInfo.js
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactInfo = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/contact");
        setContacts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-3xl font-bold text-gray-800 my-8'>
        Contact Information
      </h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>ID</th>
              <th className='py-2 px-4 border-b'>Name</th>
              <th className='py-2 px-4 border-b'>Email</th>
              <th className='py-2 px-4 border-b'>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border-b'>{index + 1}</td>
                <td className='py-2 px-4 border-b'>{contact.name}</td>
                <td className='py-2 px-4 border-b'>{contact.email}</td>
                <td className='py-2 px-4 border-b'>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactInfo;
