import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import aldeenar from '../../public/images/aldeenar.png'

export default function Subscribe() {
    return (
        <>
            <div className='px-7 mt-24 xl:mt-24 xl:px-36'>
                <div className=" w-full flex xs:flex-col lg:flex-row justify-between items-center h-[600px] bg-[#000000] px-5  xl:px-20  relative overflow-hidden  rounded-2xl">

                    <div className="bg-gradient-to-t from-[#1179fc] to-[#dc82fc] rounded-lg h-80 w-[900px] rotate-[-55deg] blur-2xl shadow-2xl shadow-purple-500 absolute top-0 left-0 -translate-x-[500px] translate-y-0">
                    </div>
                    <div className="bg-gradient-to-t from-[#1179fc] to-[#dc82fc] h-96 w-[300px] rounded-full blur-2xl shadow-2xl shadow-purple-500 absolute right-[135px] bottom-0">
                    </div>


                    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between w-full">
                        <div className='lg:w-[55%] xl:w-[60%] space-y-7 p-5 z-50'>
                            <h1 className='text-white  text-center lg:text-start text-[30px] sm:text-4xl xl:text-[52px] leading-tight font-bold w-full'>Aldeenar Fashion's Website Design by
                                <span className='bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text'>  us Became a Sales Tsunami.</span></h1>
                            <p className='text-white xl:text-[20px] font-normal hidden lg:block'>Aldeenar Fashion teamed up with Wellbenix, a top-notch web agency, to give their online platform a makeover. Their goal was to make it friendlier and more fun for users. Wellbenix focused on making things easy to find, putting up clear info, and making sure it worked well on phones too.</p>
                            <div className="flex items-center justify-center w-full lg:items-start lg:justify-start">
                                <Link href="https://calendly.com/wellbenix/website-strategy-for-online-sales?month=2024-02">
                                    <button className="rounded-full px-10 lg:py-2 xl:py-3 bg-[#1179fc] font-bold text-white uppercase hover:bg-white hover:text-[#1179fc] duration-300 ">Book A Call</button>
                                </Link>
                            </div>
                        </div>


                        <div className='lg:w-[35%] mt-1 rounded-lg sm:w-1/2  xl:w-1/4 flex justify-center items-center lg:absolute lg:-bottom-40 lg:right-20 xl:right-32 xl:top-32
                         '>
                            <Image src={aldeenar} alt="fess manager logo" className='rounded-lg' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
