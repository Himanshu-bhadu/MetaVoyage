import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineVerticalRight,AiOutlineVerticalLeft } from "react-icons/ai";
const img_event = ["https://i.ibb.co/LxKsNSJ/badal.jpg" ,"https://i.ibb.co/yBXyhyT/gkumar.jpg" ,"https://i.ibb.co/18sJSZr/babumann.jpg","https://i.ibb.co/Z2P7V2B/pookie-baba.jpg","https://i.ibb.co/K5wjPF4/diljit.jpg" ]

let count = 0;
let slideInterval;


export default function EventSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 2000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % img_event.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = img_event.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-2/5 select-none relative">
      <div className="aspect-w-16 aspect-h-9 flex justify-center items-center">
        <img src={img_event[currentIndex]} alt="image" className='w-1/2 h-[457px]' />

        <div className="absolute top-1/2 w-[540px] transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <AiOutlineVerticalRight size={30} />
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineVerticalLeft size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}