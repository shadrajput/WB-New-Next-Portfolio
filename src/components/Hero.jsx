import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import HeroImage from '../../public/images/19368.png'
import Background from '../../public/images/male-female-office-workers.jpg'


export function Hero() {

  return (
    <>
      <div className='xl:h-screen xs:pb-20 sm:pb-52 md:pb-72 lg:pb-80 w-full bg-[#f1f3f4] relative'>
        <div className='absolute right-0 bottom-0 xs:top-0 xs:w-full w-[76%] lg:w-[80%] xl:w-[73%]  '>
          <Image src={Background} alt="fess manager logo" className='bg-cover ' />
        </div>
        <div className="w-full bg-gradient-to-r from-[#060922] to-transparent xs:h-60 sm:h-[425px] md:h-[510px] lg:h-[549px] xl:h-full absolute">
          .
        </div>
        <div className="flex flex-col items-start absolute xs:top-16 xs:left-10 sm:top-20 sm:left-20 md:top-28 xl:top-[25%] xl:left-32 xs:space-y-3 xl:space-y-8">
          <div className="xs:space-y-0 space-y-10">
            <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl xl:text-[85px] font-bold ">
              Best IT <span className="text-[#372fff] ">Solutio</span><br />
            </h1>
            <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl xl:text-[85px] font-bold ">
              Company
            </h1>
          </div>
          <p className="text-gray-200 sm:py-3 text-sm xl:text-base xs:hidden sm:block ">High-Converting Ecommerce Site Development to
            Watch Your <br /> Business Soar to New Heights.
          </p>
          <div className="">
            <button className=" xs:px-5 sm:hidden xs:text-sm lg:px-10 xs:py-1 lg:py-4 z-10 bg-white text-[#060922] hover:bg-white hover:text-[#0125ca] font-semibold duration-500 rounded-md">
              Connect Now!
            </button>
            <button  className=" xs:px-5 xs:hidden sm:block xs:text-sm xl:text-base lg:px-10  xs:py-2 lg:py-4 z-10 bg-white text-[#060922] hover:bg-white hover:text-[#0125ca] font-semibold duration-500 rounded-md">
              Claim Free Consultation Now!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
