import Image from 'next/image'
import C1 from '@/images/logos/lj-university.webp'
import FeesManagerLogo from '@/images/logos/FeesManagerLogo.png'
import washon from '@/images/logos/washon.png'
import C2 from '@/images/logos/antrapreneur.webp'
import C3 from '@/images/logos/cbl.png'
import C4 from '@/images/logos/nasir-sir.png'
import Mehndi from "@/images/logos/mehndi.png"
import C5 from '@/images/logos/platform.jpg'
import AlBuqar from '@/images/logos/Al-Buraq.png'
import C7 from '@/images/logos/Alif.png'
import C8 from '@/images/logos/sona.jpg'
import C9 from '@/images/logos/aldeenar.png'

export default function Clients() {
    return (
        <div className=" xs:py-14 xs:mt-28 sm:mt-40 xl:mt-0 sm:py-20 xs:flex-col lg:flex-row flex items-start justify-center xs:px-10 xl:px-28 lg:space-x-20 ">
            <div className='grid  md:grid-cols-4 lg:grid-cols-3 grid-cols-3 justify-center items-center xs:gap-5 lg:w-[50%] xl:w-[55%] xs:order-2 lg:order-1 xs:pt-10 '>
                <div className='w-full h-full xs:p-2 xl:p-5 hover:shadow-lg rounded-md flex justify-center items-center'>
                    <Image src={C1} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-5 hover:shadow-lg rounded-md flex justify-center items-center'>
                    <Image src={C2} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-5 hover:shadow-lg rounded-md flex justify-center items-center'>
                    <Image src={FeesManagerLogo} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full  sm:p-3p-5 hover:shadow-lg rounded-md flex justify-center items-center'>
                    <Image src={washon} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-7 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={C4} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-7 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={Mehndi} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-5 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={AlBuqar} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-1 xl:p-5 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={C3} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-6 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={C5} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-5 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={C7} alt="fess manager logo" className='' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-7 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={C8} alt="fess manager logo" className='rounded-md' />
                </div>
                <div className='w-full h-full xs:p-0 sm:p-3 xl:p-5 hover:shadow-lg rounded-md flex justify-center items-center '>
                    <Image src={C9} alt="fess manager logo" className='rounded-md' />
                </div>
            </div>
            <div className='xs:w-full lg:w-[50%] xl:w-[45%] mt-10 xs:order-1 lg:order-2'>
                <div className='flex justify-center items-center lg:justify-start'>
                    <h1 className="uppercase bg-[#2730ed24] mb-5 text-center text-[#0125ca] flex justify-center items-center rounded-md py-1 px-5 text-sm font-semibold ">OUR CLIENTS</h1>
                </div>
                <h1 className="text-slate-900 text-3xl xl:text-4xl xs:text-center lg:text-start w-full xl:text-start font-bold pb-5">
                    Long Time Project, with Our<br /><span className='text-[#0125ca]'>Best Partner</span>
                </h1>
                <p className="text-[#666666] xs:text-sm xs:text-center lg:text-start">We’ve been lucky to collaborate with a long list of customers,<br /> located in and out of the country. Thanks to them we have<br /> grown as professionals.</p>
            </div>
        </div>
    )
}

