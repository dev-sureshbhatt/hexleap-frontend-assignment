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
      <div className="bg-[#3B3E47] p-2 w-[237px] h-[511px]">
      <div className={`image-div-${variant} w-[217px] h-[385px]`}>
        <img className="object-fill w-[217px] h-[385px]" src="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__" />
      </div>
      <div className={`title-div-${variant} mt-3 mb-3`}>
      Sacramento River Cats
      </div>
      <div className="flex justify-between p-3 bg-[#292B32]">
        <div className="flex flex-col"><span className="text-[12px]">Total Events</span><span className="text-[14px]">48 Events</span></div>
        <div className="flex flex-col"><span className="text-[12px]">Sport</span><span className="text-[14px]">Baseball</span></div>
      </div>
      </div>
      </>
      )
      
      }
      {variant === "advertisement" && <>Hi, I am an Advertisement Div</>}
      {variant === "collection" && <>Hi, I am a Collection Div</>}
    </div>
  )
}
