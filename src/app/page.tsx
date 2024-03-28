import Button from "./components/Button";
import Card from "./components/Card";
import "./globals.css";


const eventsData = {};
const collectionsData = {};
const advertisementData = {};
const themeMode = "light"; // we can implement useState function to switch between dark/light mode from this main page.tsx file

export default function Home() {
  return (
    <main className="wrapper">
      {/* <Button id='btn-1' className=''>See More</Button>
    <Button id='btn-2' className=''>See More Button 2</Button> */}
      <div>
        <h2 className="border-b-2 border-[#738FFF] mb-3 w-fit text-[24px] font-bold">Sports</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Card themeMode={themeMode} variant="event" data={eventsData} />
          <Card themeMode={themeMode} variant="event" data={eventsData} />
          <Card themeMode={themeMode} variant="event" data={eventsData} />
          <Card themeMode={themeMode} variant="event" data={eventsData} />
          {/* <Card themeMode={themeMode} variant='event' data={eventsData} /> */}
          <Card themeMode={themeMode} variant="advertisement" data={advertisementData} />
        </div>

        <div className="text-center">
          <Button>See More</Button>{" "}
        </div>
      </div>

      <div className="p-14 bg-gradient-to-r from-[#18282A] to-[#221A2C]">
      
      <div className="text-center">
      <h2 className="text-[50px] font-bold">Collection Spotlight</h2>
      <p className="text-[14px] font-normal leading-6">
        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
      </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Card
          themeMode={themeMode}
          variant="collection"
          data={collectionsData}
        />
        <Card
          themeMode={themeMode}
          variant="collection"
          data={collectionsData}
        />
        <Card
          themeMode={themeMode}
          variant="collection"
          data={collectionsData}
        />
      </div>
      </div>
    </main>
  );
}
