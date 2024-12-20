"use client";
import React from "react";
import { Borel } from "next/font/google";
import Faq from "@/components/Faq";
import Link from "next/link";
import Flights from "../Flight";
import Trains from "../Trains";
import Buses from "../Buses";
import Hotels from "../Hotels";
import Shows from "../Shows";

const borel = Borel({
  subsets: ["latin"],
  weight: "400",
});

const flights = [
  { from: 'Delhi', to: 'Mumbai', date: '2024-12-25', time: '14:00', passengers: '2', image: '' },
  { from: 'Bangalore', to: 'Hyderabad', date: '2024-12-23', time: '09:00', passengers: '1' },
  { from: 'Chennai', to: 'Kolkata', date: '2024-12-27', time: '18:30', passengers: '3' },
  { from: 'Pune', to: 'Goa', date: '2024-12-28', time: '12:00', passengers: '4' },
  { from: 'Hyderabad', to: 'Delhi', date: '2024-12-29', time: '15:45', passengers: '2' },
  { from: 'Mumbai', to: 'Chennai', date: '2024-12-30', time: '19:20', passengers: '2' }
];

const trains = [
  { "from": "Delhi", "to": "Chandigarh", "date": "2024-12-25", "time": "16:30", "class": "First Class" },
  { "from": "Mumbai", "to": "Pune", "date": "2024-12-24", "time": "11:00", "class": "Economy" },
  { "from": "Chennai", "to": "Bangalore", "date": "2024-12-27", "time": "13:45", "class": "Business Class" },
  { "from": "Kolkata", "to": "Delhi", "date": "2024-12-28", "time": "20:30", "class": "Economy" },
  { "from": "Jaipur", "to": "Udaipur", "date": "2024-12-29", "time": "09:45", "class": "Second Class" },
  { "from": "Hyderabad", "to": "Visakhapatnam", "date": "2024-12-30", "time": "07:15", "class": "First Class" }
]

const buses = [
  { "from": "Delhi", "to": "Jaipur", "date": "2024-12-25", "time": "10:00", "seats": "2" },
  { "from": "Mumbai", "to": "Goa", "date": "2024-12-26", "time": "15:00", "seats": "1" },
  { "from": "Hyderabad", "to": "Chennai", "date": "2024-12-27", "time": "08:45", "seats": "3" },
  { "from": "Ahmedabad", "to": "Surat", "date": "2024-12-28", "time": "14:00", "seats": "1" },
  { "from": "Bangalore", "to": "Mysore", "date": "2024-12-29", "time": "12:30", "seats": "2" },
  { "from": "Lucknow", "to": "Kanpur", "date": "2024-12-30", "time": "18:00", "seats": "3" }
]

const hotels =  [
  { "location": "Goa", "checkIn": "2024-12-25", "checkOut": "2024-12-30", "guests": "2" },
  { "location": "Shimla", "checkIn": "2024-12-26", "checkOut": "2024-12-28", "guests": "1" },
  { "location": "Manali", "checkIn": "2024-12-27", "checkOut": "2024-12-31", "guests": "4" },
  { "location": "Jaipur", "checkIn": "2024-12-28", "checkOut": "2024-12-31", "guests": "3" },
  { "location": "Ooty", "checkIn": "2024-12-29", "checkOut": "2024-12-30", "guests": "2" },
  { "location": "Andaman and Nicobar Islands", "checkIn": "2024-12-30", "checkOut": "2024-12-31", "guests": "2" }
]

const movies = [
  { "location": "Mumbai", "movieName": "Pushpa 2", "date": "2024-12-25", "time": "19:00" },
  { "location": "Delhi", "movieName": "Baby John", "date": "2024-12-26", "time": "20:00" },
  { "location": "Bangalore", "movieName": "Zero Se Restart", "date": "2024-12-27", "time": "18:00" },
  { "location": "Chennai", "movieName": "Jaat", "date": "2025-4-19", "time": "21:00" },
  { "location": "Hyderabad", "movieName": "Fateh", "date": "2025-01-10", "time": "16:30" },
  { "location": "Kolkata", "movieName": "Game Changer", "date": "2025-01-10", "time": "22:00" }
]

const shows = [
  { "location": "Mumbai", "showName": "Karan Aujla Concert", "date": "2024-12-21", "time": "21:00" },
  { "location": "Guwahati", "showName": "Diljit Dosanjh Concert", "date": "2024-12-29", "time": "20:00" },
  { "location": "Vrindavan", "showName": "Aniruddhacharya Maharaj Satsang", "date": "2024-12-27", "time": "17:30" },
  { "location": "Gurugram", "showName": "Babumann Live concert", "date": "2024-12-24", "time": "17:00" },
  { "location": "Delhi", "showName": "Gaurav Kumar Live ", "date": "2024-12-31  ", "time": "18:00" },
  { "location": "Delhi", "showName": "Badal Sharma Standup Comedy", "date": "2024-12-21", "time": "16:00" }
]

const sellTickets = [
  { "from": "Delhi", "to": "Mumbai", "date": "2024-12-25", "time": "14:00", "price": "₹4000" },
  { "location": "Bangalore", "movieName": "Pushpa 2", "date": "2024-12-26", "time": "18:00", "price": "₹250" },
  { "location": "Guwahati", "showName": "Diljit Dosanjh Concert", "date": "2024-12-29", "time": "20:00", "price": "₹1000" },
  { "from": "Hyderabad", "to": "Delhi", "date": "2024-12-29", "time": "15:45", "price": "₹3500" },
  { "location": "Bangalore", "movieName": "Zero Se Restart", "date": "2024-12-27", "time": "18:00", "price": "₹300" },
  { "location": "Delhi", "showName": "Badal Sharma Standup Comedy", "date": "2024-12-21", "time": "16:00", "price": "₹800"}
]

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
              <Link href='#book' className="mt-3 w-1/5 text-white bg-orange-500 px-8 py-2 text-2xl rounded-l-2xl rounded-r-2xl">Book Now!</Link>
            </div>
          </div>
        </div>
        
        <div>
    </div>

    <div>
      <Flights flights={flights} />
    </div>
    <div>
      <Trains trains={trains} />
    </div>
    <div>
      <Buses buses={buses} />
    </div>
    <div>
      <Hotels hotels={hotels} />
    </div>
    <div>
      <Shows shows={shows} />
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
