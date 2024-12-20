"use client";
import React from "react";
import { Borel } from "next/font/google";
import Faq from "@/components/Faq";

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
});

const Intro = () => {
  return (
    <div className="relative w-full min-h-screen bg-fixed bg-white [background:radial-gradient(100%_100%_at_50%_10%,#176087_40%,#63e_100%)]">
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <div className="content1 flex items-center text-2xl font-bold justify-between gap-12 mt-24 mx-16">
          <img
            src="https://i.ibb.co/sFvzWzx/logo.png"
            alt="MetaVoyage"
            className="h-4/5"
          />
          <div className="text flex flex-col gap-5 justify-between">
            <div className={`title text-7xl text-white ${borel.className}`}>
              MetaVoyage
            </div>
            <div
              className={`text-3xl text-[#F5F5DC] ${borel.className} flex flex-col`}
            >
              <div>Your One-Stop Destination</div>
              <div>for Seamless Travel and Ticketing Adventures!</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="accordions w-full flex flex-col items-center mt-16">
          <Faq
            question={"What is MetaVoyage"}
            answer={
              "MetaVoyage is a platform that allows users to book travel tickets, as well as tickets for shows and events, while enabling them to sell these tickets as NFTs."
            }
          />
          <Faq
            question={"How do NFT tickets work on MetaVoyage"}
            answer={
              "NFT tickets are digital assets that prove ownership of your booking. They can be securely transferred or sold, providing flexibility and enhanced functionality over traditional tickets."
            }
          />
          <Faq
            question={"What are the benefits of booking tickets as NFTs"}
            answer={
              "NFT tickets are digital assets that prove ownership of your booking. They can be securely transferred or sold, providing flexibility and enhanced functionality over traditional tickets."
            }
          />
        </div>
        <footer className="bg-black text-white py-8 w-full mt-16">
        <p className="text-center">METAVOYAGE &copy; 2024. All Rights Reserved.</p>
        <ul className="flex justify-around mt-10">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </footer>
      </div>
    </div>
  );
};

export default Intro;
