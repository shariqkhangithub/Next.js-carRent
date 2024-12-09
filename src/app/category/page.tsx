import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import arrow from "@/assets/Swap.svg"

import PickDrop from "@/components/pichDrop";
import CarPoster from "@/components/carPoster1";

import Card from "@/components/card";
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

const popularCardData = [
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
]

export default function page2() {
    return (
        <>

            {/* <Footer />  */}
            <div className="flex flex-col w-full min-h-screen ">
                <Navbar />
                <div className="flex w-full">
                    <div className=" flex  w-full min-h-screen bg-gray-100 ">

                        <Sidebar />
                        <div className="bg-gray-100 flex flex-wrap gap-5 p-7 justify-center">
                            <div className="w-full">
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
                            </div>
                            <div className="flex flex-wrap lg:flex justify-center items-center gap-6 overflow-hidden">
                                {popularCardData.map((elem, index) => (
                                    <div
                                        key={index}

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

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}