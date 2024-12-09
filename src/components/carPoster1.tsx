import Image from "next/image";
import car1P from "@/assets/image 7.svg"
import car2P from "@/assets/image 8.svg"

import round from "@/assets/Ellipse 42.svg"
import { Interface } from "readline";

interface IcarP{
    title :string,
    para:string,
    button: string,
    carImg: string
}

const CarPosterData :IcarP[]= [
    {
        title: "The Best Platform for Car Rental",
        para: "Ease of doing a car rental safely and reliably. Of course at a low price.",
        button:"Rental Car",
        carImg: car1P.src
    },
    {
        title: "Easy way to rent a car at a low price",
        para: "Providing cheap car rental services and safe and comfortable facilities.",
        button:"Rental Car",
        carImg: car2P.src
    }
]
export function CarPoster() {
  return (
    <div className="flex flex-wrap justify-between gap-4 w-full ">
      {CarPosterData.map((elem, index) => (
        <div
          key={index}
          className={`w-full lg:w-[48%] px-4  lg:px-[37px] py-3 bg-[#54A6FF] rounded-[10px] ${
            index === 1 ? "bg-[#2b47ba] hidden lg:block" : "bg-[#4A6FF]"
          }`}
        >
          <div className="space-y-4 w-[280px]">
            <h1 className="font-medium text-[18px] lg:text-[25px] text-white">
              {elem.title}
            </h1>
            <p className="text-[14px] lg:text-[15px] text-white">
              {elem.para}
            </p>
            <button
              className={`text-[14px] lg:text-[15px] px-4 py-2 rounded-md ${
                index === 1
                  ? "bg-[#54A6FF] text-white"
                  : "bg-[#3563E9] text-white"
              }`}
            >
              {elem.button}
            </button>
          </div>
          <Image
            src={elem.carImg}
            width={300}
            height={500}
            alt="Car Image"
            className="mt-4 mx-auto"
          />
        </div>
      ))}
    </div>
  );
}
export default CarPoster