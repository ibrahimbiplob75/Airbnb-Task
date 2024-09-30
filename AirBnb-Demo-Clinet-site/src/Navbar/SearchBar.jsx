import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log({ location, checkIn, checkOut, guests });
  };

  return (
    <div className="flex flex-col h-12 md:flex-row items-center bg-white p-4 rounded-full shadow-md w-full max-w-4xl mx-auto mt-4">
      {/* Where */}
      <div className="flex-1 p-2 border-r border-gray-300">
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Where
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Add location"
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* Check-In */}
      <div className="flex-1 p-2 border-r border-gray-300">
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Check-In
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* Check-Out */}
      <div className="flex-1 p-2 border-r border-gray-300">
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Check-Out
        </label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* Who */}
      <div className="flex-1 p-2">
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Who
        </label>
        <input
          type="text"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Add guests"
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white p-3 rounded-full ml-4 mt-4 md:mt-0 hover:bg-red-600 focus:outline-none flex items-center justify-center"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
