import React, { useState } from 'react';

const PREV = "<"
const NEXT = ">"

export default function Flights({ flights }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3; // Number of flights to show at a time
  const totalSlides = flights.length;

  const handleNext = () => {
    if (currentIndex < totalSlides - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Flights</h1>
      <div className="mt-6 relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {flights.map((flight, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3"
              >
                <h3 className="text-xl font-semibold">{flight.from} to {flight.to}</h3>
                <p className="mt-2">Date: {flight.date}</p>
                <p className="mt-1">Time: {flight.time}</p>
                <p className="mt-1">Passengers: {flight.passengers}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          {PREV}
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          {NEXT}
        </button>
      </div>
    </div>
  );
}
