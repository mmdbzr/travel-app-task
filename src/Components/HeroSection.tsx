import cn from "@/utils/cn";
import SearchIcon from "@/public/searchIcon.svg";
import Image from "next/image";
export interface Props {
  className?: string;
}

const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex relative flex-col h-[470px] xl:h-screen p-6 xl:px-[132px] xl:pt-11 shadow-custom",
        className,
      )}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2  w-full h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover -z-10 border-b-2 border-b-white"
      >
        <source src="/bgVideo.mp4" type="video/mp4" />
      </video>
      <p className="mt-14 xl:mt-[100px] text-white text-3xl xl:text-7xl font-bold">
        The whole world <p>awaits.</p>
      </p>
      <div className="bg-transparent xl:bg-white/40 flex flex-col space-y-4 xl:flex-row w-full xl:h-16 rounded-2xl mt-6 xl:items-centers xl:py-2 xl:px-4 xl:mt-14 xl:space-x-9">
        <div className="flex justify-center items-center w-full  bg-white/40  xl:bg-transparent rounded-4xl h-11">
          <Image
            src={"./akar-icons_search.svg"}
            alt="searchIcon"
            className="h-5 w-5 "
            width={100}
            height={100}
          />
          <input
            type="text"
            className={`w-48  xl:w-[418px] xl:h-[48px] text-white/70 font-thin placeholder:text-white/70 focus:outline-none  ml-2`}
            placeholder="Search destinations, hotels"
          />
        </div>
        <div className="flex justify-center items-center w-full xl:w-[360px]  bg-white/40  xl:bg-transparent rounded-4xl h-11">
          <div className="flex items-center px-8 py-2 xl:px-0">
            <Image
              src={"./checkOutIcon.svg"}
              alt="checkOutIcon"
              className="h-5 w-5 "
              width={100}
              height={100}
            />
            <p className="ml-2 w-20">Check in</p>
          </div>
          <div className="flex items-center text-center  border-l-[1px] xl:border-0 h-6  xl:ml-9 px-8 py-2 xl:px-0 xl:w-40">
            <Image
              src={"./checkOutIcon.svg"}
              alt="checkOutIcon"
              className="h-5 w-5 "
              width={100}
              height={100}
            />
            <p className="ml-2 w-full xl:!w-20">Check out</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full  bg-white/40  xl:bg-transparent rounded-4xl h-11 xl:mr-5">
          <Image
            src={"./passengerIcon.svg"}
            alt="checkOutIcon"
            className="h-5 w-5 "
            width={100}
            height={100}
          />
          <p className="w-32">1 room, 2 adults</p>
        </div>
        <button className="flex justify-center items-center w-full  bg-[#2659C3] xl:bg-white  rounded-4xl h-11 xl:text-[#2659C3] cursor-pointer ">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
