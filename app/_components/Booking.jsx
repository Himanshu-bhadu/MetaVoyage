import BusSlider from '@/components/BusSlider';
import React from 'react';

export default function Booking({ busDetails }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Bus Booking</h1>
      <div className="mt-6">
        <BusSlider />
      </div>
      <div className="mt-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Ticket Details</h2>
          <p className="text-lg mt-2">Choose your destination and book your ticket!</p>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {busDetails.map((bus, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{bus.city}</h3>
              <p className="mt-2">Price: ₹{bus.price}</p>
              <p className="mt-1">Available Seats: {bus.availableSeats}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Book Ticket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}