import React from "react";
import notFound from "../../../public/assets/imgs/not_found.png";

const NotFound = () => {
  return (
    <section className="h-[100%] px-[30px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src={notFound}
          alt="search not found"
          className="md:w-[550px] sm:w-[400px] w-[250px]"
        />
        <p className="md:text-2xl sm:text-[20px] text-[18px] font-bold text-gray-500 uppercase">
          Search not found!
        </p>
        <p className="mt-[6px] sm:text-[16px] text-[14px] text-gray-500 font-medium text-center">
          There seem to be no image with this description. Try searching
          something else.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
