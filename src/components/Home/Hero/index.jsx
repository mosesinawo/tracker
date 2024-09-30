import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { PiCalculatorLight } from "react-icons/pi";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

const HomeHero = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchedItem, setSearchedItem] = useState(null);

  const items = [
    {
      id: 1,
      name: "Skysper",
      image:
        "https://lhr.lostandfoundsoftware.com/dash/files/uploads/category/rucksack.png",
      mainCategory: "Bag",
      subcategory: "Backpack",
      foundDate: "06.07.2024",
    },
    {
      id: 2,
      name: "Addidas",
      image:
        "https://lhr.lostandfoundsoftware.com/dash/files/uploads/category/sneaker.png",
      mainCategory: "Clothes",
      subcategory: "Shoes",
      foundDate: "06.07.2024",
    },
    {
      id: 3,
      name: "Puma",
      image:
        "https://lhr.lostandfoundsoftware.com/dash/files/uploads/category/shoes.png",
      mainCategory: "Bag",
      subcategory: "Backpack",
      foundDate: "06.07.2024",
    },
    {
      id: 4,
      name: "Nike",
      image:
        "https://lhr.lostandfoundsoftware.com/dash/files/uploads/category/koffer.png",
      mainCategory: "Clothes",
      subcategory: "Shoes",
      foundDate: "06.07.2024",
    },
  ];

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (trackingId === "") {
      setIsFocused(false);
    }
  };

  const submitTracking = (e) => {
    e.preventDefault();
   

      const matchedItem = items.find(
        (item) =>
          item.name.toLowerCase().includes(trackingId.toLowerCase()) ||
          item.mainCategory.toLowerCase().includes(trackingId.toLowerCase()) ||
          item.subcategory.toLowerCase().includes(trackingId.toLowerCase())
      );
      setSearchedItem(matchedItem);
   

    setIsFocused(false);
  };

  // if (loader) return <Loader />;

  return (
    <>
      <div className="sm:h-[calc(100vh-75px)] h-[calc(60vh-75px)] w-full hero-container">
        <div className="">
          <div className="pt-[7.5rem] text-white flex flex-col items-center">
            <h1 className="sm:text-[4.75rem] text-[3.75rem] pl-5 sm:p-0 font-light">
              Search
            </h1>
            <div className="mt-[4rem]">
              <form
                onSubmit={submitTracking}
                className="flex flex-col gap-y-8 items-center gap-x-2"
              >
                <div className="bg-[#fafafa] w-full sm:w-[41.5rem] flex-1 relative h-[60px] align-baseline text-left flex items-end">
                  <input
                    type="text"
                    value={trackingId}
                    className="text-txtDark bg-[#fafafa] font-light pl-[1.5rem] pr-[.8rem] py-[1rem] text-[1.6rem] border-none outline-none w-[calc(100%-3px)]   tracking-wide"
                    onChange={(e) => setTrackingId(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                  <span
                    className={
                      isFocused
                        ? `absolute text-[8px] top-[1rem] transition-all ease-out duration-300 left-[.5rem] hidden text-txtDark `
                        : `absolute text-[1.6rem] top-1/2 -translate-y-1/2 transition-all ease-out duration-300 left-[1.5rem] text-txtDark `
                    }
                  >Item</span>
                </div>
                <div className="w-full">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    required
                    placeholder="date"
                    className="text-txtDark bg-[#fafafa] font-light pl-[1.5rem] pr-[.8rem] py-[1rem] text-[1.6rem] border-none outline-none w-[calc(100%-3px)] tracking-wide"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#ff6200] text-white py-5 w-fit px-8 sm:px-14 transition-all duration-300 ease-out text-[1.6rem] font-bold hover:scale-105"
                >
                  Search
                </button>
              </form>
              <div className="mt-3 text-left">
                <p className="text-white text-[1.4rem] font-semibold text-center">
                  fill in the details above to search item
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchedItem && (
        <div className="px-[7%] mt-20 lg:w-[30%] w-full  py-4 border border-gray-400 sm:mx-[7%] ">
          <img
            src={searchedItem.image}
            alt="Searched Result"
            className="w-full max-w-md mx-auto"
          />
          <div className="flex flex-col gap-5">
            <p className="text-stone-600 text-2xl">
              Title: <span className="font-semibold">{searchedItem.name}</span>
            </p>
            <p className="text-stone-600 text-2xl">
              Main Category:{" "}
              <span className="font-semibold">{searchedItem.mainCategory}</span>
            </p>
            <p className="text-stone-600 text-2xl">
              Sub Category:{" "}
              <span className="font-semibold">{searchedItem.subcategory}</span>
            </p>
            <p className="text-stone-600 text-2xl">
              Found Date:{" "}
              <span className="font-semibold">{searchedItem.foundDate}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeHero;
