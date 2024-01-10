import React, { useState } from "react";
import Link from 'next/link'


export default function Subscribe() {
    return (
        <>
            <div className='xs:py-14 xl:py-20 sm:px-14 xl:px-20'>
                <div className="w-full flex xs:flex-col lg:flex-row justify-center items-center h-full">
                    <div className="xl:w-[48%] xs:w-full bg-[#eff4fb] p-10 px-10 rounded-l-sm">
                        <div className='flex justify-start xs:justify-center items-center xl:justify-start'>
                            <h1 className="uppercase bg-[#2730ed24] text-[#0125ca] font-semibold text-start rounded-md py-1 px-3 text-sm ">GET IN TOUCH</h1>
                        </div>
                        <h2
                            id="testimonials-title"
                            className="font-display text-3xl font-semibold tracking-tight text-start xs:text-center xl:text-start text-slate-900 sm:text-4xl py-3"
                        >
                            Know more about us.
                        </h2>
                        <p className="tracking-tight text-start xs:text-center text-slate-500 text-sm xl:text-start">
                            Wellbenix Solutions has crafted diverse website development and marketing solutions that empower our clients to generate 5000$+/Month on ROI. It is truly gratifying to witness how our work has proven beneficial for them, and we are dedicated to enhancing our contribution to their continued success.
                        </p>
                        <div className="py-6">
                            <div className="flex items-center space-x-3">
                            <h1 className="text-slate-900 text-xl font-semibold xs:text-center xl:text-start">+91 93280 27580</h1>
                            <h1 className="text-slate-900 text-xl font-semibold xs:text-center xl:text-start">+91 73591 50166</h1>
                            </div>
                            <h1 className="uppercase text-[#0125ca] xs:text-center font-semibold text-start rounded-md py-1 text-sm xl:text-start ">
                                CALL US ANYTIME</h1>
                            <p className="text-[#141b35] xs:text-center sm:text-start">For all IT related work and taking your business on online</p>
                        </div>
                    </div>
                    <div className="xl:w-[52%] xs:w-full px-10 bg-[#141b35] py-10 rounded-md">
                        <div className="">
                            <h1 className="text-white text-[45px] font-bold text-center">Start your Project
                                <span className="font-extrabold ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#d5ff54] to-[#addeff]" >Today</span>
                            </h1>
                            <p className="mt-4 text-base tracking-tight text-center text-slate-500">
                                Appropriate for your specific business, making it easy for you to have quality IT services.
                            </p>
                        </div>
                        <div className="py-10 text-center ">
                            <Link href="/Connect">
                                <button className="text-[#0125ca] mt-5 w-full py-5 rounded-md font-semibold  bg-gradient-to-r from-[#d5ff54]  to-[#addeff]">Get Started</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
