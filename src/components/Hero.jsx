import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import Background from '../../public/images/young-person-during-intership.jpg'
import shape0 from '../../public/images/shape-0.png'
import shape01 from '../../public/images/shape-01.png'
import shape02 from '../../public/images/shape-02.png'
import { BsChevronDoubleDown } from "react-icons/bs"


export function Hero() {

  return (
    <>
      <div className='xs:block lg:hidden xl:h-screen w-full overflow-hdden '>
        <div className="xs:h-1/2 xl:h-screen relative overflow-hidden">
          <div className='right-0 bottom-0 xs:top-0 w-full bg-cover '>
            <Image src={Background} alt="fess manager logo" className='bg-cover ' />
          </div>
          <div className="w-full bg-gradient-to-r from-[#060922] top-0 h-full to-transparent sm:h-[425px] md:h-[510px] lg:h-[680px] xl:h-screen absolute">
          </div>
        </div>
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
            <button className=" xs:px-5 xs:hidden sm:block xs:text-sm xl:text-base lg:px-10  xs:py-2 lg:py-4 z-10 bg-white text-[#060922] hover:bg-white hover:text-[#0125ca] font-semibold duration-500 rounded-md">
              Claim Free Consultation Now!
            </button>
          </div>
        </div>
      </div>

        <div className="xs:hidden lg:block lg:h-screen xl:h-full sm:h-full ">
          <div className="-rotate-90 w-0  mt-[700px] ml-20 hidden xl:block">
            <h1 className="text-[180px] text-[#1e2a7833] font-extrabold font-popins ">Agency</h1>
          </div>
          <div className="grid xs:grid-cols-1 xs:px-10 sm:grid-cols-2 lg:w-[100%] xl:w-[87%] xl:gap-20 absolute lg:top-32 xl:top-[35%] xl:left-[10%]">
            <div className="w-[100%] h-full ">
              <h1 className="lg:text-[30px] xl:text-[40px] xs:text-start font-bold text-[#0125ca]">Unlock Growth Potential with <br /> Expert Web Development <br />& Marketing Solutions</h1>
              <p className="lg:text-lg py-10 text-gray-500 ">Elevate your online presence and supercharge sales with our comprehensive web development and marketing expertise. We create stunning websites and strategic marketing campaigns that drive real results for businesses like yours.
              </p>
              <div className="">
                <button className=" xs:px-5 sm:hidden xs:text-sm lg:px-10 xs:py-1 lg:py-4 z-10 bg-white text-[#060922] hover:bg-white hover:text-[#0125ca] font-semibold duration-500 rounded-md">
                  Connect Now!
                </button>
                <button className=" xs:px-5 xs:hidden sm:block xs:text-sm xl:text-base lg:px-10  xs:py-2 lg:py-4 z-10 bg-[#0125ca]  text-white font-semibold duration-500 rounded-md">
                  Claim Free Consultation Now!
                </button>
              </div>
            </div>
            <div className="w-[100%] lg:mt-10 xl:mt-0 ">
              <div className="relative w-full bg-red-500">
                <div className='absolute w-full bg-cover '>
                  <Image src={shape0} alt="fess manager logo" className='bg-cover ' />
                </div>
                <div className='absolute -right-20 -top-10 bg-cover '>
                  <Image src={shape02} alt="fess manager logo" className='bg-cover ' />
                </div>
                <div className='absolute -right-20 lg:top-[230px] hidden xl:block xl:top-[340px] z-10 bg-cover '>
                  <Image src={shape01} alt="fess manager logo" className='bg-cover' />
                </div>
                <div className='absolute top-5 left-5 w-full bg-cover '>
                  <Image src={Background} alt="fess manager logo" className='bg-cover ' />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center absolute lg:bottom-5 xl:-bottom-40">
            <BsChevronDoubleDown className="text-4xl animate-bounce text-[#0125ca]" />
          </div>
        </div>
    </>
  )
}
