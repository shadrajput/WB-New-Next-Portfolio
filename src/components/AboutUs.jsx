import Image from 'next/image'
import wb from '../../public/images/aboutUs.jpg'
import { AiOutlineSolution } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import Link from 'next/link'

export default function AboutUs() {
  return (
    <>
      <div id="AboutUs" className=" xs:py-16 xs:px-10 xl:py-28  xl:px-28 flex xs:flex-col md:flex-row items-center lg:space-x-10 ">
        <div className="flex flex-col w-full">
          <div className='flex w-full justify-center items-center lg:justify-start'>
            <h1 className="uppercase bg-[#2730ed24] mb-5 text-center text-[#0125ca] flex justify-center items-center rounded-md py-1 px-5 text-sm font-semibold ">WHO WE ARE</h1>
          </div>
          <h1 className="text-slate-900 xs:text-3xl xs:text-center sm:text-center md:text-start xl:text-4xl text-left font-bold py-5">
            We Team of <span className='text-[#0125ca]'> Experience</span><br /> IT Specialities
          </h1>
          <p className="xs:text-center sm:text-center md:text-start">Wellbenix is a Ecommerce Solutions Company. Focused on creating <br />technology solutions for real-lifeEcommerce problems.</p>
          <div className=' xs:py-5 xl:p-4'>
            <div className='flex xs:flex-col sm:flex-row xs:justify-center xs:items-center sm:items-start xl:justify-start xl:items-start space-x-5 p-3'>
              <div className='bg-[#ebeaff] xs:w-14 xs:h-14 sm:w-16 sm:h-10 flex justify-center items-center mt-2 text-[#0125ca] rounded-md'>
                <FaUsers className='xs:text-xl text-lg ' />
              </div>
              <div>
                <h1 className="font-bold xs:text-xl xs:py-2 text-lg xs:text-center sm:text-start">Diverse Expertise</h1>
                <p className='xs:text-center sm:text-start sm:text-sm'>Our team comprises experts with diverse skill sets and backgrounds, ensuring a holistic approach to solving your IT challenges.</p>
              </div>
            </div>
            <div className='flex xs:flex-col sm:flex-row xs:justify-center xs:items-center sm:items-start xl:justify-start xl:items-start space-x-5 p-3'>
              <div className='bg-[#ebeaff] xs:w-14 xs:h-14 sm:w-16 sm:h-10 flex justify-center items-center mt-2 text-[#0125ca] rounded-md'>
                <AiOutlineSolution className='text-2xl' />
              </div>
              <div>
                <h1 className="font-bold xs:text-xl xs:py-2 text-lg xs:text-center sm:text-start">Client Centric Solutions</h1>
                <p className="xs:text-center sm:text-start sm:text-sm">We are committed to delivering client centric IT solutions, tailored to your unique needs, with a focus on excellence.</p>
              </div>
            </div>
          </div>
          <div className="pt-3 w-full flex justify-center xs:items-center sm:items-start md:justify-start">
            <Link href="/Connect">
              <button className="font-semibold bg-[#08203a] text-white rounded-md px-7 py-3">
                Connect With Us
              </button>
            </Link>
          </div>
        </div>
        <div className='w-full h-ful flex justify-center items-center relative xs:mt-10 '>
          <div className='bg-gradient-to-r from-[#2439ff] to-[#9000ff] h-full xs:w-full xl:w-3/4 rounded-tl-full absolute right-0 z-10'>
            .
          </div>
          <div className='z-10 rounded-full border-8 my-12 flex justify-center items-center border-white'>
            <Image src={wb} alt="fess manager logo" width={450} height={450} className='rounded-full ' />

          </div>
        </div>
      </div>
    </>
  )
}
