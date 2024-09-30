import { AiOutlineMenu } from 'react-icons/ai'
import { TbWorld } from "react-icons/tb";
import { useState } from 'react'
import avatarImg from '../assets/placeholder.jpg'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Become A Host btn */}
        <div className="hidden md:block">
          <a
            to={""}
            className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-bold rounded-full  transition"
          >
            Airbnb your home
          </a>
        </div>
        <div className="hidden md:block">
          <a
            to={""}
            className="py-3 px-4 text-sm font-bold rounded-full  transition"
          >
            <TbWorld />
          </a>
        </div>

        <div></div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 w-24 justify-center md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={avatarImg}
              alt="profile"
              height="35"
              width="35"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <a
              to="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Login
            </a>
            <a
              to="/signup"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuDropdown
