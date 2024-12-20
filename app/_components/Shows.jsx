import React, { useState } from 'react';

const PREV = "<"
const NEXT = ">"

export default function Shows({ shows }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;
  const totalSlides = shows.length;

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
      <h1 className="text-3xl font-bold text-center">Shows</h1>
      <div className="mt-6 relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {shows.map((show, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-xl font-semibold">{show.location} - {show.showName}</h3>
                <p className="mt-2">Date: {show.date}</p>
                <p className="mt-1">Time: {show.time}</p>
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
