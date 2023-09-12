import Image from 'next/image'
import wb from '../../public/images/aboutUs.jpg'
import { FiUsers } from "react-icons/fi"

export default function AboutUs() {
  return (
    <>
      <div id="AboutUs" className=" xs:py-14 xs:px-10 py-28 xl:px-28 flex xs:flex-col md:flex-row items-center lg:space-x-10 ">
        <div className="flex flex-col w-full">
          <div className='flex w-full justify-center items-center lg:justify-start'>
            <h1 className="uppercase bg-[#2730ed24] mb-5 text-center text-[#0125ca] flex justify-center items-center rounded-md py-1 px-5 text-sm font-semibold ">WHO WE ARE</h1>
          </div>
          <h1 className="text-slate-900 xs:text-3xl xs:text-center sm:text-center md:text-start xl:text-4xl text-left font-bold py-5">
            We Team of <span className='text-[#0125ca]'> Experience</span><br /> It Specialities
          </h1>
          <p className="xs:text-center sm:text-center md:text-start">Wellbenix is a Ecommerce Solutions Company. Focused on creating <br />technology solutions for real-lifeEcommerce problems.</p>
          <div className=' xs:py-5 xl:p-4'>
            <div className='flex xs:flex-col sm:flex-row xs:justify-center xs:items-center sm:items-start xl:justify-start xl:items-start space-x-5 p-3'>
              <div className='bg-[#ebeaff] w-10 h-10 flex justify-center items-center mt-2 text-[#0125ca] rounded-md'>
                <FiUsers className='text-lg' />
              </div>
              <div>
                <h1 className="font-bold text-lg xs:text-center sm:text-start">Expert Team Member</h1>
                <p className='xs:text-center sm:text-start sm:text-sm'>What separates theme from all other web design agencies is the <br />ability to offer the most Friendly Experience you can imagine.</p>
              </div>
            </div>
            <div className='flex xs:flex-col sm:flex-row xs:justify-center xs:items-center sm:items-start xl:justify-start xl:items-start space-x-5 p-3'>
              <div className='bg-[#ebeaff] w-10 h-10 flex justify-center items-center mt-2 text-[#0125ca] rounded-md'>
                <FiUsers className='text-lg' />
              </div>
              <div>
                <h1 className="font-bold text-lg xs:text-center sm:text-start">Expert Team Member</h1>
                <p className='xs:text-center sm:text-start sm:text-sm'>What separates theme from all other web design agencies is the <br />ability to offer the most Friendly Experience you can imagine.</p>
              </div>
            </div>
          </div>
          <div className="pt-3 w-full flex justify-center xs:items-center sm:items-start md:justify-start">
            <button className="font-semibold bg-[#08203a] text-white rounded-md px-7 py-3">
              Let's Connect
            </button>
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
