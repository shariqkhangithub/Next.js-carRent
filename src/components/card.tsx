import React from 'react'
import Image from 'next/image'
import heartfill from "@/assets/Like (2).svg"
import car1P from "@/assets/image 7.svg"


import gas from "@/assets/gas-station.svg"
import wheel from "@/assets/Car.svg"
import Profile from "@/assets/profile-2user.svg"


interface Icard{

    name1:  string,
    sport: string,
    heart: string,
    carImg: string,
    gasName: string,
    wheelName: string,
    people: string,
    dollar : string,
    deletePrice?: string

 }
const Card = (prop:Icard) => {
    const {name1, sport, heart, carImg, gasName, wheelName, people, dollar, deletePrice } = prop
  return (
    <div className={`bg-white h-[330px] lg:w-[275px] w-[370px]  rounded-md p-4`}>

      <div className=' w-full flex justify-between items-center'> 
        <div className=''>
          <p className='font-bold'>{name1}</p>
          <p className='text-xs text-gray-700 '>{sport}</p>
          </div>
        <div><Image src={heart}  width={20} height={20}  alt='heart' /></div>
      </div>


      <div className=' flex justify-center pt-10 '>
        <Image src={carImg}  width={200} height={200}  alt='car' />
      </div>


      <div className=' flex justify-center gap-3 pt-11 '>
        <div className='flex gap-1 items-center'>
          <Image src={gas}  width={20} height={20}  alt='gas' />
          <p className='text-sm text-gray-400'> {gasName}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image src={wheel}  width={20} height={20}  alt='wheel' />
          <p className='text-sm text-gray-400'>{wheelName}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image src={Profile} width={20} height={20} alt='person'/>
          <p className='text-sm text-gray-400'>{people}</p>
        </div>
      </div>

      <div className=' flex justify-between pt-8'>
        <div className=' font-semibold content-center'>
            <p>{dollar} <span className='font-normal text-xs text-gray-400'>day</span></p>
            <del className='font-normal text-xs text-gray-400' >{deletePrice}</del>
        </div>
        <div className='bg-[#3563E9] text-white rounded-md px-5 py-1.5 h-[40px] cursor-pointer hover:bg-[#3259ce]'>Rent Now</div>
      </div>

    </div>
  )
}

export default Card