import Image from "next/image";
import mark from "@/assets/mark.svg"

interface IpickDrop{
   title:  string,
   input1: string,
   option1_1: string,
   option1_2: string,
   input2: string,
   option2_1: string,
   option2_2: string,
   input3: string,
   option3_1: string,
   option3_2: string
  

}
const PickDrop = (prop : IpickDrop) => {
    const {title,input1, option1_1,option1_2, input2, option2_1, option2_2, input3, option3_1,option3_2 } = prop
    return (
        <>
            <div className="  rounded-[10px]  bg-blue-300 lg:w-[45%] " >
                <div className="bg-white lg:px-[37px]  px-[10px] py-[23px] rounded-[10px] space-y-4">
                    <div className="flex gap-2">
                        <Image src={mark} alt="icon"/>
                        <label className="font-semibold text-[16px] leading-[24px]">{title}</label>
                    </div>
                    <div className="flex justify-between">
                        <div className=" border-e-blue-950">
                            <p  className="font-semibold text-[17px] leading-[24px]">{input1}</p>
                            <select name="" id=""  className="text-[13px] text-[#90A3BF]">
                                {/* <option value="select your city " className="w-[16px] text-[16px] ">select your city</option> */}
                                <option value={option1_1} className="w-[16px] text-[16px] ">{option1_1}</option>
                                <option value={option1_2} className="w-[16px] text-[16px] ">{option1_2}</option>

                            </select>

                        </div>
                        <div>
                            <p   className="font-semibold text-[17px] leading-[24px]">{input2}</p>
                            <select name="" id="" className="text-[13px] text-[#90A3BF]">
                                <option value={option2_1} className="w-[16px] text-[16px] ">{option2_1}</option>
                                <option value={option2_2} className="w-[16px] text-[16px] ">{option2_2}</option>

                            </select>

                        </div>
                        <div>
                            <p  className="font-semibold text-[17px] leading-[24px]">{input3}</p>
                            <select name="" id="" className="text-[13px] text-[#90A3BF] font-normal">
                                <option value={option3_1} className="w-[16px] text-[16px] ">{option3_1}</option>
                                <option value={option3_2} className="w-[16px] text-[16px] ">{option3_2}</option>
                            

                            </select>

                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}
export default PickDrop