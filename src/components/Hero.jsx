import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import Background from '../../public/images/hero-img.jpg'
import Wellbenix from '../../public/images/Wellbenix.jpg'
import googlereview from '../../public/images/googlereview.jpg'
import facebookreview from '../../public/images/facebookreview.jpg'
import shape0 from '../../public/images/shape-0.png'
import shape01 from '../../public/images/shape-01.png'
import shape02 from '../../public/images/shape-02.png'
import { BsChevronDoubleDown } from "react-icons/bs"
import Link from 'next/link'


export function Hero() {

  return (
    <>
      <div className='xs:flex items-center lg:hidden xs:h-96 p-10 pt-20 xl:h-screen w-full '>
        <div>
          <div className="xs:space-y-0 space-y-10">
            <h1 className="text-[#0125ca] font-bold md:text-lg">
              Best<span className="text-[#372fff]"> Web And Marketing </span><br />
            </h1>
            <h1 className="text-[#0125ca] xs:text-2xl sm:text-4xl lg:text-6xl xl:text-[85px] font-bold ">
              Company
            </h1>
          </div>
          <p className="text-gray-500 sm:py-3 text-sm xl:text-base xs:text-black xs:hidden sm:block sm:pr-5 ">Engaging Website Site Development to
            Watch Your Business Soar to New Heights.
          </p>
          <div className="flex items-center space-x-5">
            <Link href="https://www.google.com/search?q=wellbenix&oq=wellbenix&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOzIGCAQQIxgnMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEINzEyOGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0xaafa210090b32df5:0xef42f05da31b0a1,1">
              <div className="xs:w-28 lg:w-52 flex justify-center items-center shadow-md rounded-md cursor-pointer">
                <Image src={googlereview} alt="" className='bg-cover' />
              </div>
            </Link>
            <Link href="https://www.facebook.com/wellbenix/">
              <div className="xs:w-28 lg:w-52 flex justify-center items-center shadow-md rounded-md cursor-pointer">
                <Image src={facebookreview} Link="https://www.facebook.com/wellbenix/" alt="" className='bg-cover' />
              </div>
            </Link>
          </div>
        </div>
        <div className=" lg:mt-20 xl:mt-10">
          <div className="md:w-96">
            <Image src={Wellbenix} alt="" className='bg-cover' />
          </div>
        </div>
      </div>

      <div className="xs:hidden lg:block lg:h-screen xl:h-full sm:h-full ">
        <div className="-rotate-90 w-0  mt-[670px] ml-20 hidden xl:block">
          <h1 className="text-[180px] text-[#1e2a7833] font-extrabold font-popins ">Agency</h1>
        </div>
        <div className="grid xs:grid-cols-1 xs:px-10 sm:grid-cols-2 lg:w-[100%] xl:w-[87%] xl:gap-20 absolute lg:top-32 xl:top-[25%] xl:left-[10%]">
          <div className="w-[100%] h-full ">
            <h1 className="lg:text-[30px] xl:text-[40px] xs:text-start font-bold text-[#0125ca]">Unlock Growth Potential with <br /> Expert Web Development <br />& Marketing Solutions</h1>
            <p className="lg:text-lg py-10 text-gray-500 ">Elevate your online presence and supercharge sales with our comprehensive web development and marketing expertise. We create stunning websites and strategic marketing campaigns that drive real results for businesses like yours.
            </p>
            <div className="flex items-center space-x-5">
              <Link href="https://www.google.com/search?q=wellbenix&oq=wellbenix&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOzIGCAQQIxgnMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEINzEyOGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0xaafa210090b32df5:0xef42f05da31b0a1,1">
                <div className="w-52 shadow-md rounded-md cursor-pointer">
                  <Image src={googlereview} alt="" className='bg-cover' />
                </div>
              </Link>
              <Link href="https://www.facebook.com/wellbenix/">
                <div className="w-52 shadow-md rounded-md cursor-pointer">
                  <Image src={facebookreview} Link="https://www.facebook.com/wellbenix/" alt="" className='bg-cover' />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[105%] lg:mt-20 xl:mt-10">
            <div className=" ">
              <Image src={Wellbenix} alt="" className='bg-cover' />
            </div>
            {/* <div className="relative w-full bg-red-500">
              <div className='absolute w-full bg-cover z-10'>
                <Image src={shape0} alt="" className='bg-cover ' />
              </div>
              <div className='absolute -right-20 -top-10 bg-cover z-10'>
                <Image src={shape02} alt="" className='bg-cover ' />
              </div>
              <div className='absolute -right-20 lg:top-[230px] hidden xl:block xl:top-[340px] bg-cover z-10'>
                <Image src={shape01} alt="" className='bg-cover ' />
              </div>
              <div className='absolute top-5 left-5 w-full bg-cover '>
                <Image src={Background} alt="" className='bg-cover ' />
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-full flex justify-center items-center absolute lg:bottom-5 xl:-bottom-40">
          <BsChevronDoubleDown className="text-4xl animate-bounce text-[#0125ca]" />
        </div>
      </div>
    </>
  )
}
