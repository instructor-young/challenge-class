import DealCard from "@/components/DealCard";
import Page from "@/components/Page";
import { SDeal } from "@/schemas/Deal.schema";
import Link from "next/link";

const deal: SDeal = {
  id: 111,
  title: "춘향골 만 원 한 박스 판매함",
  imgURL:
    "https://dnvefa72aowie.cloudfront.net/origin/article/202406/0c3fc4e63d2251a9348b80ddd5a087918089f7b02ec374e49cf9c87a4461fde9_0.webp?f=webp&q=95&s=1440x1440&t=inside",
  location: "서울 강동구 명일제2동",
  price: 9000,
  likesCount: 54,
};

export default function HomePage() {
  return (
    <Page title="전체 판매글">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <Link href={`/deals/${deal.id}`}>
                <DealCard deal={deal} />
              </Link>
            </li>
          ))}
      </ul>
    </Page>
  );
}
