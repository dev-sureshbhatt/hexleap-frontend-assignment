interface CardProps {
  //I could create three type of cards as per the assignment FIGMA files
  variant: "event" | "collection" | "advertisement";
  data: CardData;
  themeMode: "light" | "dark";
}

interface CardData {
  team_image?: string;
  team_name?: string;
  total_events?: number | string;
  sport?: string;
  collection_team_image?: string;
  date?: string;
  day?:string;
  time?:string;
  venue?: string;
  tag_text?: string;
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
                className="w-[217px] h-[385px] object-cover"
                src={data.team_image}
              />
              {/* <img
                className="object-fill w-[217px] h-[385px]"
                src="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__"
              /> */}
            </div>
            <div className={`title-div-${variant} mt-3 mb-3`}>
              {data.team_name}
            </div>
            {/* below class is affected with dark/light mode toggle  */}
            {/* <div className={isThemeLight ? ("flex justify-between p-3 bg-[#F7F7F8]") : ("flex justify-between p-3 bg-[#292B32]")}> */}
            <div className={`flex justify-between p-3 ${isThemeLight ? ("bg-[#F7F7F8]") : ("bg-[#292B32]")}`}>

            {/* <div className="flex justify-between p-3 bg-[#292B32]"> */}
              <div className="flex flex-col">
                <span className="text-[12px] font-normal">Total Events</span>
                <span className="text-[14px] font-medium">{`${data.total_events} Events`}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-normal">Sport</span>
                <span className="text-[14px] font-medium">{data.sport}</span>
              </div>
            </div>
          </div>
        </>
      )}

      {variant === "advertisement" && (
        
        // <div className="bg-[#3B3E47] p-2 w-[237px] h-[511px] flex flex-col gap-3">
        <div className={`p-2 w-[237px] h-[511px] flex flex-col gap-3 ${isThemeLight ? ("bg-[#FFFFFF] text-black"):  ("bg-[#3B3E47]")}`}>
        {/* above class is affected with dark/light mode toggle  */}
          <img
            className="object-fill w-[217px] h-[218px]"
            src={data.ad_image}
          />
          <div className="p-3 flex flex-col gap-2">
            <p className="text-[20px]">{data.ad_title}</p>
            <p className="text-[12px] leading-5">
              {data.ad_description}
            </p>
          </div>
        </div>
      )}

      {variant === "collection" && (

  // <div className="bg-[#3B3E47] p-2 w-[257px] h-[624px]">


        <div className={`p-2 w-[257px] h-[624px] ${isThemeLight ? ("bg-[#FFFFFF] text-black"):  ("bg-[#3B3E47]")}`}>
          {/* anove class is affected with dark/light mode toggle  */}
          <img
            className="object-fill w-[226px] h-[401px]"
            src={data.collection_team_image}
          />

          <div className="flex flex-col text-center gap-3 mt-4">
            <div className="text-[17px]">{data.team_name}</div>
            <div className="pipe text-[14px] font-normal uppercase">
              <span>{data.date}</span>
              <span>{data.day}</span>
              <span>{data.time}</span>
            </div>
            <div className="text-[14px] font-normal">
              {data.venue}
            </div>
          </div>
          <div className="bg-black text-[13px] px-[30px] py-[10px] mt-3 mb-3 text-center text-white">
            {data.tag_text}
          </div>
        </div>
      )}
    </div>
  );
}
