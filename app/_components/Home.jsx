import FlightSlider from '@/components/FlightSlider';
import TrainSlider from '@/components/TrainSlider';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Flights from "./Flight";
import Trains from "./Trains";
import Buses from "./Buses";
import Hotels from "./Hotels";
import Shows from "./Shows";
import BusSlider from '@/components/BusSlider';

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

export default function Home() {
  const { data: session, status } = useSession();

    const getUserData = async (email) => {
    try {
      const response = await fetch(`/api/get-data?email=${encodeURIComponent(email)}`, {
        method: 'GET',
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.email) {
      getUserData(session.user.email);
    }
  }, [status, session]);

  const bookTicket = async (ticketData) => {
    const response = await fetch('/api/book-ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });

    const result = await response.json();
    return result;
  };

  const travelOptions = {
    Flight: ['From', 'To', 'Date', 'Time', 'Passengers'],
    Train: ['From', 'To', 'Date', 'Time', 'Class'],
    Bus: ['From', 'To', 'Date', 'Time', 'Seats'],
    Hotel: ['Location', 'Check-in', 'Check-out', 'Guests'],
  };

  const sellOptions = {
    'Travel Ticket': ['From', 'To', 'Date', 'Time', 'Ticket Price'],
    'Movie Ticket': ['Location', 'Movie Name', 'Show Date', 'Show Time', 'Ticket Price'],
    'Show Ticket': ['Location', 'Show Name', 'Show Date', 'Show Time', 'Ticket Price'],
  };

  const [currentOpenTravelOption, setCurrentOpenTravelOption] = useState(null);
  const [currentOpenSellOption, setCurrentOpenSellOption] = useState(null);

  const renderFormFields = (fields) =>
    fields.map((field, index) => (
      <input
        key={index}
        placeholder={field}
        className="p-2 border border-gray-300 rounded mb-2"
      />
    ));

  return (
    <div className="w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,#176087_0,#0A2239_100%)]">
    </div>
      <section id="hero" className="text-center py-16">
        <h1 className="text-4xl font-bold">Book Your Next Experience</h1>
        <p className="mt-4">Travel, Movies, and Live Shows — All in One Place</p>
      </section>

        <h1 className="text-5xl font-bold text-center w-full bg-blue-50 pt-5 ">Travel Booking</h1>
      <div id="travel" className="py-16 bg-blue-50 align-center flex flex-row">
        <FlightSlider />
        <div className='w-3/5'>
        <Flights flights={flights} />
        </div>
        
      </div>
      <div id="travel" className="py-16 bg-blue-50 align-center flex flex-row">
        <TrainSlider />
        <div className='w-3/5'>
        <Trains trains={trains} />
        </div>
        
      </div>
      <div id="travel" className="py-16 bg-blue-50 align-center flex flex-row">
        <BusSlider />
        <div className='w-3/5'>
        <Buses buses={buses} />
        </div>
        
      </div>

      <section id="sell" className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8">Sell Tickets</h2>
        <div className="flex justify-center flex-wrap space-x-4">
          {Object.keys(sellOptions).map((option) => (
            <button
              key={option}
              onClick={() => setCurrentOpenSellOption(currentOpenSellOption === option ? null : option)}
              className="bg-blue-700 text-white px-6 py-3 rounded mb-4"
            >
              {option}
            </button>
          ))}
        </div>
        {currentOpenSellOption && (
          <div className="bg-white p-6 rounded shadow-md mt-6">
            {renderFormFields(sellOptions[currentOpenSellOption])}
            <button className="bg-blue-700 text-white px-6 py-2 rounded mt-4">
              Sell {currentOpenSellOption}
            </button>
          </div>
        )}
      </section>

      <footer className="bg-black text-white py-8 w-full mt-16">
        <p className="text-center">METAVOYAGE &copy; 2024. All Rights Reserved.</p>
        <ul className="flex justify-around mt-10">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
}
