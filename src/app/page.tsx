import Button from "./components/Button";
import Card from "./components/Card";
import "./globals.css";





const eventsData = [{
  team_image: "https://www.figma.com/file/ILhqTNgZ8z0y8NjV8QtlYv/image/ceed8067dc33760174d3f67737f6e318d0f118ff",
  team_name: "Sacramanto River Cats",
  total_events:"48",
  sport: "Baseball"
},
{
  team_image: "https://www.figma.com/file/ILhqTNgZ8z0y8NjV8QtlYv/image/a24ad1e076e2b366b2456bbd169b0c3c9525252c",
  team_name: "Las Vegas Aviators",
  total_events:"28",
  sport: "Baseball"
},
{
  team_image: "https://www.figma.com/file/ILhqTNgZ8z0y8NjV8QtlYv/image/b2902f7ab2fcf21c696811f745109da24a740d73",
  team_name: "New Jersey Devils",
  total_events:"15",
  sport: "Ice Hockey"
},
{
  team_image: "https://www.figma.com/file/ILhqTNgZ8z0y8NjV8QtlYv/image/a24ad1e076e2b366b2456bbd169b0c3c9525252c",
  team_name: "Las Vegas Avaiators",
  total_events:"28",
  sport: "Baseball"
}]

const collectionsData = {};
const advertisementData = {};
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
          <Card themeMode={themeMode} variant="advertisement" data={advertisementData} />
        </div>

        <div className="text-center">
          <Button>See More</Button>{" "}
        </div>
      </div>


{/* collection spotlight DIV */}

      <div className={`p-14 mt-10 ${isThemeLight ? ("bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] text-black") : ("bg-gradient-to-r from-[#18282A] to-[#221A2C]")}`}>
      
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
