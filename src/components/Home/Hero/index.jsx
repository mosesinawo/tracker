import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { PiCalculatorLight } from "react-icons/pi";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";

const HomeHero = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isFocused, setIsFocused] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

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
    setLoader(true);
  
    setTimeout(() => {
      if (trackingId === "XX123-456-789") {
        setLoader(false);
        navigate("/tracking");
        console.log("tracking")
      } else {
        navigate("/error");
        setLoader(false);
        console.log("error")
      }
    }, 3000);
  
    setIsFocused(false);
  };
  

  if (loader) return <Loader />;

  return (
    <div className="h-[calc(100vh-75px)] w-full hero-container">
      <div className="">
        <div className="pt-[7.5rem] text-white flex flex-col items-center">
          <h1 className="sm:text-[4.75rem] text-[3.75rem] pl-5 sm:p-0 font-light">
            Ship, manage, track, deliver
          </h1>
          <div className="flex mt-24">
            <div className="bg-white sm:w-[158px] w-[110px] h-[120px] flex flex-col items-center justify-center gap-y-3">
              <PiCalculatorLight color="black" size={50} />
              <span className="text-txtDark uppercase text-[1.6rem] font-bold ">
                Rate & ship
              </span>
            </div>
            <div className="bg-primary -mt-6 sm:w-[158px] w-[110px]  h-[140px] flex flex-col items-center justify-center gap-y-3">
              <BsBoxSeam color="white" size={50} />
              <span className="text-white uppercase text-[1.6rem] font-bold">
                Track
              </span>
            </div>
            <div className="bg-white sm:w-[158px] w-[110px]  h-[120px] flex flex-col items-center justify-center gap-y-3">
              <CiLocationOn color="black" size={50} />
              <span className="text-txtDark uppercase text-[1.6rem] font-bold">
                Location
              </span>
            </div>
          </div>
          <div className="mt-[4rem]">
            <form onSubmit={submitTracking} className="flex  gap-x-2">
              <div className="bg-[#fafafa] w-[22rem] sm:w-[41.5rem] flex-1 relative h-[60px] align-baseline text-left flex items-end">
                <input
                  type="text"
                  value={trackingId}
                  className=" text-txtDark bg-[#fafafa] font-light pl-[1.5rem] pr-[.8rem] py-[1rem] text-[1.6rem] border-none outline-none
                   w-[calc(100%-3px)]  tracking-wide"
                  onChange={(e) => setTrackingId(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <span
                  className={
                    isFocused
                      ? `absolute text-[1.2rem] top-[1rem] uppercase transition-all ease-out duration-300
                  left-[1.5rem] text-txtDark font-bold `
                      : `absolute text-[1.6rem] top-1/2 -translate-y-1/2 uppercase transition-all ease-out duration-300
                  left-[1.5rem] text-txtDark font-bold`
                  }
                >
                  Tracking ID
                </span>
              </div>
              <button
                type="submit"
                className="bg-[#ff6200] text-white py-5 px-8 sm:px-14 transition-all duration-300 ease-out
                text-[2rem] font-bold uppercase hover:scale-105"
              >
                Track
              </button>
            </form>
            <div className="mt-3 text-left">
              <p className="text-white text-[1.6rem] uppercase font-semibold">
                Multiple tracking numbers | need help ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
