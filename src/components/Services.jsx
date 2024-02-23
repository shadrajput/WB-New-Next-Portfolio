import Tilt from 'react-parallax-tilt';
import Image from 'next/image'
import GoogleReview from '../../public/images/googlereview.jpg'


export default function Services() {
    return (
        <div id="services" className='services-section  bg-[#f7faff] w-full py-16 lg:py-16 xl:py-20 md:py-10 px-7 mt-10 lg:mt-24 xl:mt-32 xl:px-36 flex flex-col justify-center items-center '>
            <div>
                <h1 className='text-black text-center text-[30px] sm:text-4xl lg:text-[50px] leading-none font-bold'>Full Creative Services
                    <br /> <span className='bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text'> For You.</span></h1>
            </div>


            <div className="grid grid-row-2 w-full mt-10 space-y-10">
                <Tilt className="Tilt" options={{ max: 25 }}>
                    <div className="w-full flex flex-col bg-white md:flex-row justify-between sm:items-start md:items-center py-8 md:h-60 xl:px-10 rounded-md shadow-xl md:shadow-md shadow-[#9000ff38] cursor-pointer">
                        <div className="flex flex-col md:flex-row items-start justify-center sm:justify-start sm:items-start md:w-[70%] space-y-5">
                            <div className="bg-gradient-to-r from-[#2439ff] to-[#9000ff] ml-7 rounded-md w-20 md:w-32 xl:w-52 h-16  md:h-32 xl:h-32 sm:ml-6 flex justify-center items-center ">
                                <h1 className="text-white text-4xl font-bold">
                                    01.
                                </h1>
                            </div>
                            <div className="space-y-3 px-6">
                                <h3 className="uppercase hidden md:block font-bold text-gray-500">Personalize</h3>
                                <h1 className=" text-2xl md:text-[30px] font-extrabold">E-commerce Website Design</h1>
                                <p className='md:hidden xl:block'>Upgrade your online store with our E-commerce design service. We create user-friendly websites that turn visitors into customers, driving sales and growth for your business.</p>
                            </div>
                        </div>
                        <div className='w-3/4  md:w-[30%] pt-5 px-10 sm:w-72 md:p-5 sm:flex sm:items-start'>
                            <Image src={GoogleReview} alt="" className='' />
                        </div>
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{ max: 25 }}>
                    <div className="w-full flex flex-col bg-white md:flex-row justify-between sm:items-start md:items-center py-8 md:h-60 xl:px-10 rounded-md shadow-xl md:shadow-md shadow-[#9000ff38] cursor-pointer">
                        <div className="flex flex-col md:flex-row items-start justify-center sm:justify-start sm:items-start md:w-[70%] space-y-5">
                            <div className="bg-gradient-to-r from-[#2439ff] to-[#9000ff] ml-7 rounded-md w-20 md:w-32 xl:w-52 h-16 md:h-32 xl:h-32 sm:ml-6 flex justify-center items-center ">
                                <h1 className="text-white text-4xl font-bold">
                                    02.
                                </h1>
                            </div>
                            <div className="space-y-3 px-6">
                                <h3 className="uppercase hidden md:block font-bold text-gray-500">Personalize</h3>
                                <h1 className=" text-2xl md:text-[30px] font-extrabold">Redesign E-commerce Website </h1>
                                <p className='md:hidden xl:block'>Give your online store a makeover! Our website redesign service makes your site look better and work smoother. That means customers stick around longer and buy more from you.</p>
                            </div>
                        </div>
                        <div className=' w-3/4 md:w-[30%] pt-5 px-10 sm:w-72 md:p-5 sm:flex sm:items-start'>
                            <Image src={GoogleReview} alt="" className='' />
                        </div>
                    </div>
                </Tilt>

                
            </div>
        </div>
    )
}

