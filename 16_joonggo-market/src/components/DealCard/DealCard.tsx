import { SDeal } from "@/schemas/Deal.schema";
import Image from "next/image";

interface DealCardProps {
  deal: SDeal;
}

function DealCard({ deal }: DealCardProps) {
  const { title, imgURL, price, location, likesCount } = deal;

  return (
    <div>
      <div className="relative aspect-square">
        <Image alt={title} src={imgURL} fill className="object-cover" />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
}

export default DealCard;
