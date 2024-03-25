import React, { useState } from "react";
import Collection from "./Collection";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Carousels = () => {
  const collections = [
    {
      id: 1,
      path: "images/img6.png",
      name: "Las Vegas Aviators",
      btn: "Take Flight collections",
    },
    {
      id: 2,
      path: "images/img7.jpg",
      name: "Sacramento River Cats",
      btn: "Orange collections",
    },
    {
      id: 3,
      path: "images/img6.png",
      name: "Las Vegas Aviators",
      btn: "Take Flight collections",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const collectionsPerPage = [1, 3, 4]; // Number of collections per page for different screen sizes

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === collections.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? collections.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative sm:hidden w-[350px] mx-auto">
      <div className="flex overflow-x-scroll scroll-bar-hide">
        {collections
          .slice(currentIndex, currentIndex + collectionsPerPage[0])
          .map((item, index) => (
            <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 px-4">
              <Collection {...item} />
            </div>
          ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-l"
        onClick={prevItem}
      >
        <GrFormPrevious />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-r"
        onClick={nextItem}
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
};

export default Carousels;
