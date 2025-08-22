"use client"
import Logo from "@/public/Logo.svg";
import menuIcon from "@/public/menuIcon.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link"
import cn from "@/utils/cn";


export interface NavProps {}

const Navbar: React.FC<NavProps> = ({}) => {
  const [activeButton,setActiveButton]=useState<string>("Home");
  const navigationItems=["Home", "Stays", "Flights", "Packages", "Sign Up"];

  return <nav className="flex items-center xl:px-12 py-4 xl:py-6 justify-center xl:justify-between w-full fixed bg-transparent z-10"> 
    <Image src={menuIcon} width={100} height={100} alt="menuIcon" className="h-6 w-6 fixed left-6 xl:hidden cursor-pointer"/>
    <Image src={Logo} width={100} height={100} alt="Logo" className=" w-14 h-6 xl:h-10 xl:w-20 cursor-pointer "/>
    <div className="hidden xl:flex space-x-8">
      {navigationItems.map((pathname) =>
        <Link
          key={crypto.randomUUID()}
          onClick={() => setActiveButton(pathname)}
          className={cn(activeButton === pathname ? "border-b-[1px] text-white " : " text-white")}
          href={"/"}
        >
          {pathname}
        </Link>
      )}
    </div>

   </nav>
}

export default Navbar