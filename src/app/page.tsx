import Image from "next/image";
import Navbar from "@/components/navbar";
import CarPoster from "@/components/carPoster1";
import PickDrop from "@/components/pichDrop";
import arrow from "@/assets/Swap.svg"
import Card from "@/components/card";
import Footer from "@/components/footer";
import car1White from "@/assets/image 7.svg"
import car2Gray from "@/assets/image 8.svg"
import car3Blue from "@/assets/Car (1).svg"
import carLGray from "@/assets/Car (2).svg"
import carLBrown from "@/assets/Car (3).svg"
import carLBlue from "@/assets/Car (4).svg"
import carLBlack from "@/assets/Car (6).svg"
import carLBlueLight from "@/assets/Car (7).svg"
import carLWhite from "@/assets/Car (8).svg"
import carLGrayLight from "@/assets/Car (9).svg"
import heartStroke from "@/assets/Like (3).svg"
import heartfill from "@/assets/Like (2).svg"
import Link from "next/link";

const cardData = [

  {
    name1: "Koenigsegg",
    sport: "sport",
    heart: heartfill.src,
    carImg: car1White.src,
    gasName: "90L",
    wheelName: "Manual",
    people: "2 People",
    dollar: "$99.00"


  },
  {
    name1: "Nissan GT - R",
    sport: "sport",
    heart: heartStroke.src,
    carImg: car2Gray.src,
    gasName: "80L",
    wheelName: "Manual",
    people: "2 People",
    dollar: "$80.00",
    deletePrice: "$100.00"
  },
  {
    name1: "Rolls - Royce",
    sport: "Sedan",
    heart: heartfill.src,
    carImg: car3Blue.src,
    gasName: "70L",
    wheelName: "Manual",
    people: "4 People",
    dollar: "$96.00"


  },
  {
    name1: "Nissan GT - R",
    sport: "sport",
    heart: heartStroke.src,
    carImg: car2Gray.src,
    gasName: "80L",
    wheelName: "Manual",
    people: "2 People",
    dollar: "$80.00",
    deletePrice: "$100.00"

  },
]

const popularCardData = [
  {
    name1: "All New Rush",
    sport: "SUV",
    heart: heartStroke.src,
    carImg: carLGray.src,
    gasName: "70L",
    wheelName: "Manual",
    people: "6 People",
    dollar: "$72.00",
    deletePrice: "$80.00"


  },
  {
    name1: "CR - V",
    sport: "SUV",
    heart: heartfill.src,
    carImg: carLBrown.src,
    gasName: "80L",
    wheelName: "Manual",
    people: "6 People",
    dollar: "$80.00"


  },
  {
    name1: "All New Rush",
    sport: "SUV",
    heart: heartStroke.src,
    carImg: carLBlue.src,
    gasName: "90L",
    wheelName: "Manual",
    people: "6 People",
    dollar: "$74.00",



  },
  {
    name1: "CR - V",
    sport: "SUV",
    heart: heartfill.src,
    carImg: carLBlack.src,
    gasName: "80L",
    wheelName: "Manual",
    people: "6 People",
    dollar: "$80.00"


  },
  {
    name1: "MG ZX Exclusice",
    sport: "Hatchback",
    heart: heartfill.src,
    carImg: carLBlueLight.src,
    gasName: "70L",
    wheelName: "Manual",
    people: "4 People",
    dollar: "$76.00",
    deletePrice: "$80.00"



  },
  {
    name1: "MG ZX Exclusice",
    sport: "Hatchback",
    heart: heartStroke.src,
    carImg: carLWhite.src,
    gasName: "80L",
    wheelName: "Manual",
    people: "6 People",
    dollar: "$80.00",
    deletePrice: "$80.00"

  },
  {
    name1: "MG ZX Exclusice",
    sport: "Hatchback",
    heart: heartfill.src,
    carImg: carLBlueLight.src,
    gasName: "90L",
    wheelName: "Manual",
    people: "4 People",
    dollar: "$74.00",
    deletePrice: "$80.00"



  },
  {
    name1: "New MG ZS",
    sport: "SUV",
    heart: heartStroke.src,
    carImg: carLGrayLight.src,
    gasName: "80L",
    wheelName: "Manual",
    people: "6 People",
    dollar: "$80.00",
    deletePrice: "$80.00"



  }
]
export default function Home() {


  return (
    <>

      <div className="w-full bg-[#F6F7F9] ">
        <Navbar />
        <div className="p-4 py-2 pb-3 lg:p-8 space-y-5">
          <CarPoster />

          {/* -----------Pich and Drop --------------- */}
          <div className="flex flex-col gap-7 lg:flex-row justify-center relative  lg:justify-between lg:position-none">

            <PickDrop
              title="Pick-Drop"
              input1="Location"
              option1_1="karachi"
              option1_2="islamabad"
              input2="Date"
              option2_1="20 july 2022"
              option2_2="22 july 2022"
              input3="Time"
              option3_1="07:00"
              option3_2="08:00"
            />

            <div className=" absolute left-[41%] lg:left-[47%] lg:top-[25%] h-[60px] w-[60px] rounded-[10px] bg-[#3563E9] flex justify-center items-center">
              <Image src={arrow} alt="icon" />
            </div>

            <PickDrop

              title="Drop-Off"
              input1="Location"
              option1_1="karachi"
              option1_2="islamabad"
              input2="Date"
              option2_1="20 july 2022"
              option2_2="22 july 2022"
              input3="Time"
              option3_1="07:00"
              option3_2="08:00"
            />


          </div>

          {/* ----------- Popular Card -------------- */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[#90A3BF]">Popular Car</p>
              <p className="font-[500] text-[16px] leading-[20px] text-[#3563E9]  cursor-pointer">View All </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 overflow-hidden">
              {cardData.map((elem, index) => (
                <div
                  key={index}
                  className={`${index > 0 ? "hidden lg:flex" : ""}`}
                >
                  <Card
                    name1={elem.name1}
                    sport={elem.sport}
                    heart={elem.heart}
                    carImg={elem.carImg}
                    gasName={elem.gasName}
                    wheelName={elem.wheelName}
                    people={elem.people}
                    dollar={elem.dollar}
                    deletePrice={elem.deletePrice}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --------- Recommended Car ------------------- */}

          <div className="space-y-6">
            <div className="flex justify-between">
              <p className="text-[#90A3BF]">Recomendation Car</p>
              <p className="font-[500] text-[16px] leading-[20px] text-[#3563E9] cursor-pointer">View All </p>
            </div>

            <div className="flex flex-wrap  justify-center items-center gap-7 overflow-hidden">
              {popularCardData.map((elem, index) => (

                <Card
                  name1={elem.name1}
                  sport={elem.sport}
                  heart={elem.heart}
                  carImg={elem.carImg}
                  gasName={elem.gasName}
                  wheelName={elem.wheelName}
                  people={elem.people}
                  dollar={elem.dollar}
                  deletePrice={elem.deletePrice}
                />

              ))}
            </div>


          </div>
          <div className=" w-full py-4 flex justify-end items-center gap-4">
            <div className=" w-[55%] flex justify-between items-center">
            <Link href="./category"><div className="bg-[#3563E9] text-white rounded-md px-5 py-1.5 h-[40px] w-[120px] cursor-pointer hover:bg-[#3259ce] flex justify-center items-center">
              Category page
            </div></Link>
            <p className="text-gray-500">120 Car</p>
            </div>
          </div>


        </div>

      </div>
      <Footer />



    </>
  );
}
