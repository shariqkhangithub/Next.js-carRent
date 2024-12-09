import React from 'react'

const Footer = () => {
    return (
        <div className=' w-full '>
            <div className='w-full lg:justify-btween grid grid-cols-1 lg:flex border-b-2 border-slate-400 '>

                <div className='h-full w-[45%] bg-blue-300x p-8'>
                    <h2 className='text-[#3563E9] text-[29px] font-[600]'>MORENT</h2>
                    <p className='text-sm text-gray-500'>Our vision is to provide convenience </p>
                    <p className='mt-[-5px] text-sm text-gray-500'> and help increase your sales business.</p>
                </div>

                <div className='h-full p-8 gap-28 grid grid-cols-2 lg:flex  '>
                    <div className='h-full   content-center gap-5 flex flex-col '>
                        <h3 className='font-bold text-xl '>About</h3>
                        <p className='text-gray-500'>How it works</p>
                        <p className='text-gray-500'>Featured</p>
                        <p className='text-gray-500'>Partnership</p>
                        <p className='text-gray-500'>Business Relation</p>
                    </div>
                    <div className='h-full  content-center  gap-5 flex flex-col '>
                        <h3 className='font-bold text-xl'>Community</h3>
                        <p className='text-gray-500'>Events</p>
                        <p className='text-gray-500'>Blog</p>
                        <p className='text-gray-500'>Podcast</p>
                        <p className='text-gray-500'>Invite a friend</p>
                    </div>
                    <div className='h-full content-center  gap-5 flex flex-col '>
                        <h3 className='font-bold text-xl'>socials</h3>
                        <p className='text-gray-500'>Discord</p>
                        <p className='text-gray-500'>Instagram</p>
                        <p className='text-gray-500'>Twitter</p>
                        <p className='text-gray-500'>Facebook</p>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[25%] flex'>
                <div className='h-full w-2/4 p-8 pb-12 content-center text-sm'><p>©2022 MORENT. All rights reserved</p></div>
                <div className='h-full w-2/4 items-center flex gap-5 justify-end p-8 pb-12 text-sm'>
                    <p>Privacy & Policy</p>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

export default Footer