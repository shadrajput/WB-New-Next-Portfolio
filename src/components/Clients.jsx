import Image from 'next/image'
import cvl from '@/images/logos/Your paragraph text (1).png'
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
import sultanmobile from '@/images/logos/sultanmobile.jpg'
import beliewhoney from '@/images/logos/beliewhoney.png'
import alzidaan from '@/images/logos/alzidaan.webp'

export default function Clients() {
    return (
        <div className="sm:py-5 xs:flex-col items-start justify-center xs:px-10 xl:px-10 md:py-0 md:pb-5 ">
            <div className='flex flex-col w-full justify-center items-center mt-10 xs:order-1 lg:order-2 '>
                <div className='flex justify-center items-center lg:justify-start'>
                    <h1 className="uppercase bg-[#2730ed24] mb-5 text-center text-[#0125ca] flex justify-center items-center rounded-md py-1 px-5 text-sm font-semibold ">OUR CLIENTS</h1>
                </div>
                <h1 className="text-slate-900 text-center text-3xl xl:text-4xl w-full font-bold pb-5">
                    Long Time Project, with Our<br /><span className='text-[#0125ca]'>Best Partner</span>
                </h1>
                <p className="text-[#666666] xs:text-sm text-center">We’ve been lucky to collaborate with a long list of customers, located in and out of the country. Thanks to them we have<br /> grown as professionals.</p>
            </div>

            <div className='overflow-hidden flex flex-col  group pt-10'>
                <div className='grid xs:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 animate-loop-scroll gap-10 items-start py-3 group-hover:paused'>
                    <div className='w-full h-full rounded-md flex justify-center items-center'>
                        <Image src={cvl} alt="fess manager logo" className='w-20' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center'>
                        <Image src={C1} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center'>
                        <Image src={C2} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center'>
                        <Image src={FeesManagerLogo} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center'>
                        <Image src={washon} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={C4} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={Mehndi} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={AlBuqar} alt="fess manager logo" className='' />
                    </div>
                </div>
                <div className='grid xs:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 animate-loop-scroll gap-10 items-start py-3 group-hover:paused'>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={C3} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={C5} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={C7} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={sultanmobile} alt="fess manager logo" className='' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={C8} alt="fess manager logo" className='rounded-md' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={C9} alt="fess manager logo" className='rounded-md' />
                    </div>
                    <div className='w-full h-full rounded-md flex justify-center items-center '>
                        <Image src={alzidaan} alt="fess manager logo" className='rounded-md' />
                    </div>
                    <div className='w-full h-full xs:p-0 sm:p-3 xl:p- rounded-md flex justify-center items-center '>
                        <Image src={beliewhoney} alt="fess manager logo" className='rounded-md' />
                    </div>
                </div>
            </div>

        </div>
    )
}

