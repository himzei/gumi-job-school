import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface iAppProps {
  imgCard: string;
  title: string;
  description: string;
  slug: string;
  subName: string;
  CARD_WIDTH: number;
  CARD_HEIGHT: number;
  MARGIN: number;
}

export default function ListItem({
  imgCard,
  slug,
  subName,
  CARD_WIDTH,
  CARD_HEIGHT,
  MARGIN,
  title,
  description,
}: iAppProps) {
  return (
    <Link href={`/post/${subName}/${slug}`}>
      <div
        className={`shrink-0 cursor-pointer group border border-muted`}
        style={{
          width: `${CARD_WIDTH}px`,
          height: `${CARD_HEIGHT}px`,
          margin: `${MARGIN}px`,
        }}
      >
        <div className="w-full h-[280px]">
          <Image
            width={240}
            height={280}
            className="w-full h-full object-cover duration-500 group-hover:-translate-y-3"
            src={imgCard}
            alt="comics_image"
          />
        </div>
        <div className="py-2 px-1">
          <h2 className="text-sm font-semibold duration-500 group-hover:text-red-600 px-2 ">
            {title}
          </h2>
          <h4 className="text-gray-500 text-sm px-2">{description}</h4>
        </div>
      </div>
    </Link>
  );
}
