interface CardProps {
  //I could create three type of cards as per the assignment FIGMA files
  variant: "event" | "collection" | "advertisement";
  data: CardData;
  themeMode: "light" | "dark"
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

  // defining CSS classes based on Card variant
  const cardClass = `card${variant}`;
  return(
    <div className={cardClass}>
      {/* card variant type one styling/structure goes here */}
      {variant === "event" && 
      
      (
      <>
      <div className={`image-div-${variant}`}>
        Image Div
      </div>
      <div className={`title-div-${variant}`}>
      Sacramento River Cats
      </div>
      <div className="flex">
        <div className="flex flex-col"><span>Total Events</span><span>48</span></div>
        <div className="flex flex-col"><span>Sport</span><span>Baseball</span></div>
      </div>
      </>
      )
      
      }
      {variant === "advertisement" && <>Hi, I am an Advertisement Div</>}
      {variant === "collection" && <>Hi, I am a Collection Div</>}
    </div>
  )
}
