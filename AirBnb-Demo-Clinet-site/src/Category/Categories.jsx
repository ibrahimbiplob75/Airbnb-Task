import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryList";
import Container from "../Container/Container";
import FilterButton from "../Button/FilterButton";
import { AiOutlineMenu } from "react-icons/ai";
import { GrSelect } from "react-icons/gr";

const Categories = () => {
  const [params, setparams] = useSearchParams();
  const category = params.get("category");

  // Add useState for managing the modal's open state
  const [isOpen, setIsOpen] = useState(false);

  console.log(categories);

  return (
    <Container>
      <div className="flex flex-row justify-center items-center">
        <div className="p-3 flex item-center justify-between gap-4 overflow-x-auto">
          {categories?.map((item) => (
            <CategoryBox
              key={item?.label}
              label={item?.label}
              Icon={item?.icon}
              description={item?.description}
              active={category === item?.label}
            />
          ))}
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 w-24 justify-center h-12 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <GrSelect />
          <div className="hidden md:block">
            <h1>Filter</h1>
          </div>
        </div>
        <div className="p-1 w-96 justify-center h-12 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <h1 className="text-xs">Display Total Before Taxes</h1>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          />
        </div>
      </div>

      {/* Modal component - add your modal implementation here */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
            {/* Add price range bar chart or other filter options here */}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Categories;
