interface CardProps {
  //I could create three type of cards as per the assignment FIGMA files
  variant: "event" | "collection" | "advertisement";
  data: CardData;
  themeMode: "light" | "dark";
}

interface CardData {
  team_image?: string;
  team_name?: string;
  total_events?: number;
  sport?: string;
  date_time?: string;
  venue?: string;
  CTA_text?: string;
  ad_image?: string;
  ad_title?: string;
  ad_description?: string;
}

export default function Card({ ...props }: CardProps) {
  const { variant, data } = props;
  const isThemeLight = true 

  // defining CSS classes based on Card variant
  const cardClass = `card${variant}`;
  return (
    <div className={`${cardClass} shadow-2xl`}>
      {/* card variant type one styling/structure goes here */}
      {variant === "event" && (
        <>
        {/* below class is affected with dark/light mode toggle  */}
        {/* <div className="bg-[#3B3E47] p-2 w-[237px] h-[511px]"> */}
          {/* <div className={isThemeLight ? ("text-black bg-[#fff] p-2 w-[237px] h-[511px] ") : ("bg-[#3B3E47] p-2 w-[237px] h-[511px]")}> */}
          <div className={`p-2 w-[237px] h-[511px] ${isThemeLight ? ("bg-[#FFFFFF] text-black"):  ("bg-[#3B3E47]")}`}>
            <div className={`image-div-${variant} w-[217px] h-[385px]`}>
              <img
                className="object-fill w-[217px] h-[385px]"
                src="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__"
              />
            </div>
            <div className={`title-div-${variant} mt-3 mb-3`}>
              Sacramento River Cats
            </div>
            {/* below class is affected with dark/light mode toggle  */}
            {/* <div className={isThemeLight ? ("flex justify-between p-3 bg-[#F7F7F8]") : ("flex justify-between p-3 bg-[#292B32]")}> */}
            <div className={`flex justify-between p-3 ${isThemeLight ? ("bg-[#F7F7F8]") : ("bg-[#292B32]")}`}>

            {/* <div className="flex justify-between p-3 bg-[#292B32]"> */}
              <div className="flex flex-col">
                <span className="text-[12px] font-normal">Total Events</span>
                <span className="text-[14px] font-medium">48 Events</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-normal">Sport</span>
                <span className="text-[14px] font-medium">Baseball</span>
              </div>
            </div>
          </div>
        </>
      )}

      {variant === "advertisement" && (
        
        <div className="bg-[#3B3E47] p-2 w-[237px] h-[511px] flex flex-col gap-3">
        {/* above class is affected with dark/light mode toggle  */}
          <img
            className="object-fill w-[217px] h-[218px]"
            src="https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfHZuev7WUagkCJeDUVdHbkG5bqC2YmjXKJSZLKbyymg8PLUCF1d-3ITeG2OSpcKgHjVq3lbGf7eLgT0-RWii9vAbSSrltvD7RI88jX3A1p0QZTvL~643uJOzylJw00w1DWQKzrTEHLkK2D4jxJ4n3C9D03B-Odrn9zVjUWBi9mqnU5op991kONICO-AT7eCWb2APcuZxUGYnj8xpoj5L5modFS2ABEy2X1gaT0HXJZoVu2276JkODvrtjnC3F4~lM3f7rLQQam1iI8a3frGTCuFQfbXM3VAQ7nfBJDVDCcyeJcyc4m1oPldx2ONzo2CGn5jRfonRO5RlD-OHbierA__"
          />
          <div className="p-3 flex flex-col gap-2">
            <p className="text-[20px]">Advertisement Title</p>
            <p className="text-[12px] leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      )}

      {variant === "collection" && (

  // <div className="bg-[#3B3E47] p-2 w-[257px] h-[624px]">


        <div className="bg-[#3B3E47] p-2 w-[257px] h-[624px]">
          {/* anove class is affected with dark/light mode toggle  */}
          <img
            className="object-fill w-[226px] h-[401px]"
            src="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxtMQ-umkbEHlxMyMnstAs6rYbIBMoz6Y6e6X~XvOsr-rAQ2g4qOWln3w~caMGqtbtAtbCjyj-yjVTMTm1mZVFfJBk5KOXa491~GuF-sCId9i622FHtykZ-nY9kpx54GqgSCB2nGFH3HeaHmDDrU0aEinZpFFnqbmnXRqB9agt6U5PFCW70dobn1FS2-uCCVjf-JcgJzpDyt6xoO-4xWk6IWNKkJCo1K7Ad4KoEpKKDiFYyDhsXOKGZrevPj~1tdFMRrtdkTS8ckyL82IMwnzlMMtKVgab1EpeEiBiF-BW88PwJ0towH4BaKyuBx~E-cLgN0lW8hacJNXlAv-u1nFA__"
          />

          <div className="flex flex-col text-center gap-3 mt-4">
            <div className="text-[17px]">Las Vegas Aviators</div>
            <div className="pipe text-[14px] font-normal uppercase">
              <span>Oct 15</span>
              <span>SUN</span>
              <span>4:30 pm</span>
            </div>
            <div className="text-[14px] font-normal">
              Las Vegas Ballpark, Las Vegas, Nevada
            </div>
          </div>
          <div className="bg-black text-[13px] px-[30px] py-[10px] mt-3 mb-3 text-center">
            Take Flight Collection
          </div>
        </div>
      )}
    </div>
  );
}
