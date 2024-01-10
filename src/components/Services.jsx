import { AiOutlineShoppingCart } from "react-icons/ai"
import { HiArrowSmRight } from "react-icons/hi"
import { AiFillSetting } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { MdOutlineComputer } from "react-icons/md"
import { FaWordpressSimple } from "react-icons/fa"
import { FaPhotoVideo } from "react-icons/fa"
import { ImEarth } from "react-icons/im"


export default function Services() {
    return (
        <div id="Services" className='bg-[#f7faff] w-full xs:py-14 xs:px-10 lg:py-20 xl:px-28 '>
            <div className=" flex flex-col w-full items-center h-full">
                <div className="flex flex-col text-center justify-center items-center pb-10  ">
                    <h1 className="uppercase bg-[#2730ed24] text-[#0125ca] font-semibold w-36 rounded-md text-center py-1 text-sm ">Our Services</h1>
                    <h1 className="text-slate-900 text-[35px] text-center font-popins font-semibold py-5">
                        Leading IT Solution for you<br /> <span className="text-[#0125ca] ">business</span></h1>
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-10 w-full">
                    <div className="p-6 bg-white shadow-lg z-10  rounded-md hover:border-[#0125ca] hover:shadow-sm hover:shadow-[#0125ca] ">
                        <h1 className="text-slate-900 text-lg font-semibold group-hover:border-[#0125ca]">Social Ads</h1>
                        <div className="py-7 flex items-start relative group-hover:border-[#0125ca]">
                            <p className="text-sm text-black pr-20">Social media marketing offers a multitude of benefits for businesses. It provides a cost-effective platform to boost brand awareness, engage with a global audience, and target specific demographics with tailored advertising. </p>
                            <AiFillFacebook className="absolute text-5xl right-0 text-[#0125ca]" />
                        </div>
                        {/* <div className="flex items-center text-[#0125ca] font-semibold group-hover:border-[#0125ca]">
                            <h1>Learn More</h1>
                            <HiArrowSmRight className="text-2xl font-semibold" />
                        </div> */}
                    </div>
                    <div className=" p-6 bg-white shadow-lg z-10   rounded-md hover:border-[#0125ca] hover:shadow-sm hover:shadow-[#0125ca] ">
                        <h1 className="text-slate-900 text-lg font-semibold">Website Development</h1>
                        <div className="py-7 flex items-start relative">
                            <p className="text-sm text-black pr-20">A website is a crucial asset for businesses, offering numerous benefits. It serves as a 24/7 online storefront, providing a global platform to showcase products, services, and information. </p>
                            <MdOutlineComputer className="absolute text-5xl right-0 text-[#0125ca]" />
                        </div>
                        {/* <div className="flex items-center text-[#0125ca] font-semibold">
                            <h1>Learn More</h1>
                            <HiArrowSmRight className="text-2xl font-semibold" />
                        </div> */}
                    </div>
                    <div className="p-6 bg-white shadow-lg z-10  rounded-md hover:border-[#0125ca] hover:shadow-sm hover:shadow-[#0125ca] ">
                        <h1 className="text-slate-900 text-lg font-semibold">Performance Marketing</h1>
                        <div className="py-7 flex items-start relative">
                            <p className="text-sm text-black pr-20">Achieve tangible growth for your clinic through our results-driven performance marketing campaigns, tailored to attract and convert the right audience for your medical services.
                            </p>
                            <FaPhotoVideo className="absolute text-5xl right-0 text-[#0125ca]" />
                        </div>
                        {/* <div className="flex items-center text-[#0125ca] font-semibold">
                            <h1>Learn More</h1>
                            <HiArrowSmRight className="text-2xl font-semibold" />
                        </div> */}
                    </div>
                    <div className="p-6 bg-white shadow-lg z-10 bounded-md hover:border-[#0125ca] hover:shadow-sm hover:shadow-[#0125ca] ">
                        <h1 className="text-slate-900 text-lg font-semibold">CRM Automation</h1>
                        <div className="py-7 flex items-start relative">
                            <p className="text-sm text-black pr-20">Streamline and optimize your clinic's operations with our cutting-edge CRM automation solutions, enhancing patient interactions and maximizing efficiency.</p>
                            <AiFillSetting className="absolute text-5xl right-0 text-[#0125ca]" />
                        </div>
                        {/* <div className="flex items-center text-[#0125ca] font-semibold">
                            <h1>Learn More</h1>
                            <HiArrowSmRight className="text-2xl font-semibold" />
                        </div> */}
                    </div>
                    <div className=" p-6 bg-white shadow-lg z-10  rounded-md hover:border-[#0125ca] hover:shadow-sm hover:shadow-[#0125ca] ">
                        <h1 className="text-slate-900 text-lg font-semibold">Brand Building</h1>
                        <div className="py-7 flex items-start relative">
                            <p className="text-sm text-black pr-20">Cultivate a strong and trustworthy brand for your clinic through our strategic brand-building services, ensuring a distinctive identity in the competitive healthcare landscape.</p>
                            <FaWordpressSimple className="absolute text-5xl right-0 text-[#0125ca]" />
                        </div>
                        {/* <div className="flex items-center text-[#0125ca] font-semibold">
                            <h1>Learn More</h1>
                            <HiArrowSmRight className="text-2xl font-semibold" />
                        </div> */}
                    </div>
                    <div className="p-6 bg-white shadow-lg z-10  rounded-md hover:border-[#0125ca] hover:shadow-sm hover:shadow-[#0125ca] ">
                        <h1 className="text-slate-900 text-lg font-semibold">SEO Optimization</h1>
                        <div className="py-7 flex items-start relative">
                            <p className="text-sm text-black pr-20">Effective on-page and off-page SEO to get you ranking in top positions on Google.</p>
                            <ImEarth className="absolute text-5xl right-0 text-[#0125ca]" />
                        </div>
                        {/* <div className="flex items-center text-[#0125ca] font-semibold">
                            <h1>Learn More</h1>
                            <HiArrowSmRight className="text-2xl font-semibold" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

