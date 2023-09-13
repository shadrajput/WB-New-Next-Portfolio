import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import Background from '../../public/images/young-person-during-intership.jpg'


export function Hero() {

  return (
    <>
      <div className='xs:h-[49%] xl:h-screen w-full overflow-hidden'>
        <div className='right-0 bottom-0 xs:top-0 w-full bg-cover relative '>
          <Image src={Background} alt="fess manager logo" className='bg-cover ' />
        </div>
      {/* <div className="w-full bg-gradient-to-r from-[#060922] top-0 xs:h-[220px]  to-transparent sm:h-[425px] md:h-[510px] lg:h-[680px] xl:h-screen absolute">
          .
        </div> */}
        <div className="flex flex-col items-start absolute xs:top-[10%] xs:left-10 sm:top-20 sm:left-20 md:top-28 lg:top-[30%] xl:top-[25%] xl:left-32 xs:space-y-3 xl:space-y-8">
          <div className="xs:space-y-0 space-y-10">
            <h1 className="text-white xs:text-2xl sm:text-4xl lg:text-6xl xl:text-[85px] font-bold ">
              Best IT <span className="text-[#372fff] ">Solution</span><br />
            </h1>
            <h1 className="text-white xs:text-2xl sm:text-4xl lg:text-6xl xl:text-[85px] font-bold ">
              Company
            </h1>
          </div>
          <p className="text-gray-200 sm:py-3 text-sm xl:text-base xs:text-black sm:text-white xs:hidden sm:block ">High-Converting Ecommerce Site Development to
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
