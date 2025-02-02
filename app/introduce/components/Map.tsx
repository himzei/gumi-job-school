import Image from "next/image";
import Maps from "@/public/introduce/map.jpg";

export function Map() {
  return (
    <div className="w-full h-full bg-white">
      <Image src={Maps} className="w-full h-full object-cover" alt="map" />
    </div>
  );
}
