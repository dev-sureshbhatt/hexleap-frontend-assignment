import Button from "./components/Button";
import Card from "./components/Card";
import "./globals.css";


//dummy data to be used as props to render content
import { eventsData, collectionsData, advertisementData } from "../../dummyData";

const themeMode = "light"; // we can implement useState function to switch between dark/light mode from this main page.tsx file



export default function Home() {

  const isThemeLight = false 



  return (
    <main className={`wrapper ${isThemeLight ? ("bg-[#F7F7F8] text-black") : ("bg-[#292B32]")}`}>
      {/* <Button id='btn-1' className=''>See More</Button>
    <Button id='btn-2' className=''>See More Button 2</Button> */}
      <div>
        <h2 className="border-b-2 border-[#738FFF] mb-3 w-fit text-[24px] font-bold">Sports</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Card themeMode={themeMode} variant="event" data={eventsData[0]} />
          <Card themeMode={themeMode} variant="event" data={eventsData[1]} />
          <Card themeMode={themeMode} variant="event" data={eventsData[2]} />
          <Card themeMode={themeMode} variant="event" data={eventsData[3]} />
          {/* <Card themeMode={themeMode} variant='event' data={eventsData} /> */}
          <Card themeMode={themeMode} variant="advertisement" data={advertisementData[0]} />
        </div>

        <div className="text-center">
          <Button>See More</Button>{" "}
        </div>
      </div>


{/* collection spotlight DIV */}

      <div className={`p-14 mt-10 ${isThemeLight ? ("bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] text-black") : ("bg-gradient-to-r from-[#18282A] to-[#221A2C]")}`}>
      
      <div className="text-center">
      <h2 className="font-bold text-[30px] sm:text-[50px]">Collection Spotlight</h2>
      <p className="mb-10 font-normal leading-5 sm:leading-6 text-[12px] sm:text-[14px]">
        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
      </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Card
          themeMode={themeMode}
          variant="collection"
          data={collectionsData[0]}
        />
        <Card
          themeMode={themeMode}
          variant="collection"
          data={collectionsData[1]}
        />
        <Card
          themeMode={themeMode}
          variant="collection"
          data={collectionsData[2]}
        />
      </div>
      </div>
    </main>
  );
}
