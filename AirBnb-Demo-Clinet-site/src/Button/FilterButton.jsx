import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import ReactSlider from "react-slider";

const FilterButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 500]);

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Filter Button */}
      <button
        onClick={handleFilterClick}
        className="flex items-center btn btn-ghost text-white rounded-lg transition"
      >
        <FaFilter className="mr-2" />
        Filter
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Filter Options</h2>

            {/* Price Range Slider */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Price Range:</label>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                min={0}
                max={1000}
                value={priceRange}
                onChange={(value) => setPriceRange(value)}
                renderThumb={(props, state) => (
                  <div {...props} className="bg-blue-500 w-6 h-6 rounded-full">
                    {state.valueNow}
                  </div>
                )}
              />
              <div className="flex justify-between text-sm mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Apply Button */}
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              onClick={handleCloseModal}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
