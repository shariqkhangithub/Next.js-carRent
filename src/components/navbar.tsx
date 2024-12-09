import Image from "next/image";
import search from "@/assets/search-normal.svg"
import volume from "@/assets/filter.svg"
import like from "@/assets/Like.svg"
import notification from "@/assets/Notification.svg"
import setting from "@/assets/Settings.svg"
import dp from "@/assets/Profil.svg"

export default function Navbar() {
    return (
      <div className="px-4 lg:px-8 h-[100px] w-full flex justify-between items-center bg-white sticky top-[0px]">
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Logo */}
          <div>
            <a href="#"><p className="font-bold text-[20px] lg:text-[27px] text-[#3563E9]">
              MORENT
            </p></a>
          </div>
  
          {/* Search Box */}
          <div className="w-[200px] lg:w-[400px] h-[38px] border rounded-[70px] flex items-center px-4">
            <Image src={search} alt="icon" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-[14px] w-full ml-2 cursor-pointer"
            />
            <Image src={volume} alt="icon" />
          </div>
        </div>
  
        {/* Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-4">
            <Image src={like} alt="icon" className=" cursor-pointer" />
            <Image src={notification} alt="icon"  className=" cursor-pointer" />
            <Image src={setting} alt="icon" className=" cursor-pointer" />
          </div>
          <Image src={dp} alt="icon" className="w-[38px] h-[38px] cursor-pointer" />
        </div>
      </div>
    );
  }
  