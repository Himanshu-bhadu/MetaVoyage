import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineVerticalRight,AiOutlineVerticalLeft } from "react-icons/ai";
const img_Train = ["https://i.ibb.co/Mg7QL7f/jaipur.jpg","https://i.ibb.co/hcJmzmv/kolkata.png","https://i.ibb.co/k3cJwrZ/delhi.jpg","https://i.ibb.co/Jzf2WQH/hyderabad.jpg","https://i.ibb.co/1J3GHHW/mumbai.jpg","https://i.ibb.co/st16sdy/lucknow.jpg" ]

let count = 0;
let slideInterval;


export default function TrainSlider() {
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
    }, 500);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % img_Train.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = img_Train.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={img_Train[currentIndex]} alt="image" className='w-[540px] h-[312px]' />

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