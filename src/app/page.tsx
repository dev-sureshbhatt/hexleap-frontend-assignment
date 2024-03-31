"use client";
import Button from "./components/Button";
import Card from "./components/Card";
import "./globals.css";


//dummy data that is used as props to simulate content rendering
import {
  eventsData,
  collectionsData,
  advertisementData,
} from "../../dummyData";
import { useGlobalThemeContext } from "./context/ThemeContext";






export default function Home() {


  //variable to store theme state, enabled using useContext API
  const { isThemeLight, setIsThemeLight } = useGlobalThemeContext();

  //function to toggle theme when theme toggle div is clicked
  function themeToggle() {
    setIsThemeLight(!isThemeLight);
  }


  return (
    <main
      className={`wrapper ${
        isThemeLight ? "bg-[#F7F7F8] text-black" : "bg-[#292B32]"
      }`}
    >
     
     {/* theme toggle button */}
      <button onClick={themeToggle} className="absolute right-0">
        Toggle Theme [Light/Dark]
      </button>
      <div>
        <h2 className="border-b-2 border-[#738FFF] mb-3 w-fit text-[24px] font-bold">
          Sports
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">


{/* --------------------- REUSABLE CARD COMPONENT GOES BELOW. We just need to select the variant and pass the data --------------------*/}
        
          <Card variant="event" data={eventsData[0]} />  
          <Card variant="event" data={eventsData[1]} />
          <Card variant="event" data={eventsData[2]} />
          <Card variant="event" data={eventsData[3]} />
          <Card variant="advertisement" data={advertisementData[0]} />
        </div>

        <div className="text-center">
          <Button>See More</Button>{" "}
        </div>
      </div>

      {/* collection spotlight DIV */}

      <div
        className={`p-14 mt-10 shadow-lg ${
          isThemeLight
            ? "bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] text-black"
            : "bg-gradient-to-r from-[#18282A] to-[#221A2C]"
        }`}
      >
        <div className="text-center">
          <h2 className="font-bold text-[35px] sm:text-[50px]">
            Collection Spotlight
          </h2>
          <p className="mb-10 font-normal leading-5 sm:leading-6 text-[16px] sm:text-[14px]">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">

{/* --------------------- REUSABLE CARD COMPONENT GOES BELOW. We just need to select the variant and pass the data --------------------*/}
          <Card variant="collection" data={collectionsData[0]} />
          <Card variant="collection" data={collectionsData[1]} />
          <Card variant="collection" data={collectionsData[2]} />
        </div>
      </div>
    </main>
  );
}
