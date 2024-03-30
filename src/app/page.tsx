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

const collectionsData = [
  {
    collection_team_image: "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__",
    team_name: "Las Vegas Avaiators",
    date: "Oct 15",
    day: "Sun",
    time: "4:30 pm",
    venue: "Las Vegas Ballpark, Las Vegas, Nevada",
    tag_text: "Take Flight Collection"
  },
  {
    collection_team_image: "https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ptz8aSbr1X2gpkQvNp75uy5Qqc3G8thxATUNJrSlH2UpQlPHInbDDZzPDm06nh~Nz5I1JJ4DJV7c8-QhyhII56mMhaJJpXXDp1PCUpSFQ4e8Ye14EdQY91xENMHr1f0JdG2SSkVcxAMgzFhchgpPmcJgVvZX42PQo9HDwrB-Mu9YzL8HDg5lqq592kuVfpcoCk2mmirfFLs7nHYKlxKizeHFC38nNStqJTHYUJHGziz0RNo2oRTX9lYT5MCG0g7fSSu968zB9IjW7Xu5z337Wt3fLdxiQu12YbUec3D-iYVeMH-6xRitiF8XgVwKniDwWIEs6yrvu122pOCHDB~P6g__",
    team_name: "Sacramento River Cats",
    date: "Oct 15",
    day: "Sun",
    time: "4:30 pm",
    venue:"Sutter Health Park, Sacramento, California",
    tag_text: "Orange Collection"
  },
  {
    collection_team_image: "https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__",
    team_name: "Las Vegas Avaiators",
    date: "Oct 15",
    day: "Sun",
    time: "4:30 pm",
    venue: "Las Vegas Ballpark, Las Vegas, Nevada",
    tag_text: "Take Flight Collection"
  }
]
const advertisementData = [
  {
    ad_image: "https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfHZuev7WUagkCJeDUVdHbkG5bqC2YmjXKJSZLKbyymg8PLUCF1d-3ITeG2OSpcKgHjVq3lbGf7eLgT0-RWii9vAbSSrltvD7RI88jX3A1p0QZTvL~643uJOzylJw00w1DWQKzrTEHLkK2D4jxJ4n3C9D03B-Odrn9zVjUWBi9mqnU5op991kONICO-AT7eCWb2APcuZxUGYnj8xpoj5L5modFS2ABEy2X1gaT0HXJZoVu2276JkODvrtjnC3F4~lM3f7rLQQam1iI8a3frGTCuFQfbXM3VAQ7nfBJDVDCcyeJcyc4m1oPldx2ONzo2CGn5jRfonRO5RlD-OHbierA__",
    ad_title: "Advertisement Title",
    ad_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]
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
