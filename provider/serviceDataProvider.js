"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const fetchServices = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/servicesdata");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error("Error setting services context:", error);
      }
    };

    fetchData();
  }, []);

  const updateServices = async () => {
    try {
      const data = await fetchServices();
      setServices(data);
    } catch (error) {
      console.error("Error updating services:", error);
    }
  };

  return (
    <ServiceContext.Provider value={{ services, setServices, updateServices }}>
      {children}
    </ServiceContext.Provider>
  );
};