import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate total guests
  const totalGuests = adultCount + childrenCount + infantCount + petCount;

  const handleSearch = () => {
    console.log({ location, checkIn, checkOut, totalGuests });
  };

  const handleGuestChange = (type, operation) => {
    if (type === "adults") {
      setAdultCount((prev) =>
        operation === "increase" ? prev + 1 : prev > 0 ? prev - 1 : 0
      );
    } else if (type === "children") {
      setChildrenCount((prev) =>
        operation === "increase" ? prev + 1 : prev > 0 ? prev - 1 : 0
      );
    } else if (type === "infants") {
      setInfantCount((prev) =>
        operation === "increase" ? prev + 1 : prev > 0 ? prev - 1 : 0
      );
    } else if (type === "pets") {
      setPetCount((prev) =>
        operation === "increase" ? prev + 1 : prev > 0 ? prev - 1 : 0
      );
    }
  };

  return (
    <div className="">
      {/* Search Bar */}
      <div className="flex flex-col h-16 lg:flex-row items-center bg-white p-4 rounded-full shadow-md w-full max-w-6xl mx-auto mt-2">
        {/* Where */}
        <div className="w-full lg:flex-1 p-2 border-b lg:border-b-0 lg:border-r border-gray-300">
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
        <div className="w-full lg:flex-1 p-2 border-b lg:border-b-0 lg:border-r border-gray-300">
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
        <div className="w-full lg:flex-1 p-2 border-b lg:border-b-0 lg:border-r border-gray-300">
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
        <div
          className="w-full lg:flex-1 p-2 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            Who
          </label>
          <div className="w-full outline-none text-gray-700">
            {totalGuests > 0 ? `${totalGuests} guests` : "Add guests"}
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-red-500 text-white p-3 rounded-full mt-4 lg:mt-0 lg:ml-4 hover:bg-red-600 focus:outline-none flex items-center justify-center w-full lg:w-auto"
        >
          <FaSearch />
        </button>
      </div>

      {/* Guest Modal */}
      {isModalOpen && (
        <div className="absolute top-16 right-0 w-1/3 bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span>Adults</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleGuestChange("adults", "decrease")}
                className="px-2 py-1 border"
              >
                -
              </button>
              <span>{adultCount}</span>
              <button
                onClick={() => handleGuestChange("adults", "increase")}
                className="px-2 py-1 border"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span>Children</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleGuestChange("children", "decrease")}
                className="px-2 py-1 border"
              >
                -
              </button>
              <span>{childrenCount}</span>
              <button
                onClick={() => handleGuestChange("children", "increase")}
                className="px-2 py-1 border"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span>Infants</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleGuestChange("infants", "decrease")}
                className="px-2 py-1 border"
              >
                -
              </button>
              <span>{infantCount}</span>
              <button
                onClick={() => handleGuestChange("infants", "increase")}
                className="px-2 py-1 border"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span>Pets</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleGuestChange("pets", "decrease")}
                className="px-2 py-1 border"
              >
                -
              </button>
              <span>{petCount}</span>
              <button
                onClick={() => handleGuestChange("pets", "increase")}
                className="px-2 py-1 border"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
