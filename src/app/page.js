import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import OurObjective from "@/components/OurObjective";
import Subfooter from "@/components/Subfooter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Carousels />
      <div className="relative">
        <Explore />
        <Subfooter />
        <OurObjective />
      </div>
    </div>
  );
}
