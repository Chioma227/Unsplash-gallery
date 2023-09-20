import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({searchQuery, handleSearchChange}) => {
  return (
    <nav className="bg-blue-600 sm:py-[9px] py-[14px] shadow-xl">
      <ul className="flex items-center justify-around">
        <li>
          <p className="font-bold text-white md:text-[30px] text-[20px] select-none">
            <span className="md:text-[37px] text-[27px] text-yellow-400">
              D
            </span>
            nD
          </p>
        </li>
        <li>
          <div className=" relative">
            <input
              type="text"
              placeholder="search image"
              onChange={handleSearchChange}
              value={searchQuery}
              className={clsx(
                " sm:w-[360px] placeholder:text-gray-300 text-white font-medium bg-transparent indent-[1.4rem] sm:py-[8px] py-[5px]",
                "outline-none border-l-[5px] sm:border-r-[2px] sm:border-t-[2px] sm:border-b-[2px] border-white rounded-md",
                "border-r-[1px] border-t-[1px] border-b-[1px]"
              )}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute sm:top-[14px] top-[12px] right-[10px] text-gray-400"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
