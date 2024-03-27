interface CardProps {
  //I could create three type of cards as per the assignment FIGMA files
  variant: "event" | "collection" | "advertisement";
  data: CardData;
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

export default function Card({...props}: CardProps) {
    const {variant, data} = props

    // defining CSS classes based on Card variant
    const cardClass = `card${variant}`
    
    return <div className={cardClass}>{variant}</div>;
}
