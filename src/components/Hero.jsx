import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import googlereview from '../../public/images/google.svg'
import facebookreview from '../../public/images/facebook-1.svg'
import rating from '../../public/images/rating.svg'
import Link from 'next/link'


export function Hero() {

  return (
    <>
      <div className=" hero-section h-[800px] lg:h-[750px] xl:h-[700px] flex justify-center items-center pt-24 lg:pt-14 px-7 sm:px-14 md:px-20">
        <div className="">

          <h1 className="text-[40px] sm:text-[45px] md:text-[55px] lg:text-[75px] xl:text-[85px] font-bold text-white text-center leading-tight pb-7 ">Designing digital store for fashion leaders genrating <span className="bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text">sales with flair.</span></h1>
          <p className="text-white text-center xl:px-52 font-medium">Are you ready to make a name for yourself in the world of fashion? Look no further! Our team specializes in creating bespoke e-commerce solutions that are guaranteed to make you stand out from the crowd. By booking an appointment with us</p>

          <div className="flex justify-center items-center mt-7">
            <Tilt className="Tilt" options={{ max: 25 }}>
              <Link href={"https://g.page/r/CaGwMdoFL_QOEBI/review"}>
                <div className="flex cursor-pointer justify-center hover:scale-105 duration-300 mt-3 items-center bg-black lg:bg-[#ffffff66] rounded-full py-3 px-5">
                  <div className="flex items-center">
                    <div className='w-full'>
                      <Image src={facebookreview} alt="" className='' />
                    </div>
                    <div className="-translate-x-4 w-full">
                      <Image src={googlereview} alt="" className='w-5' />
                    </div>
                  </div>
                  <div>
                    <Image src={rating} alt="" className='' />
                  </div>
                </div>
              </Link>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  )
}
