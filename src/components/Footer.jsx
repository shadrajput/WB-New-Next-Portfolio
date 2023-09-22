import Image from "next/image";
import Logo from "../../public/images/logo.png"
import Link from 'next/link'
import { MdLocationOn } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi"
import { AiFillLinkedin } from "react-icons/ai"
import { CgMail } from "react-icons/cg"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"


export function Footer() {
  return (
    <>
      <div className='xs:pb-14 xl:pb-0 xs:px-10 bg-black flex  flex-col justify-start items-center' id="ContactUs">
        <div className="grid xs:grid-cols-1 lg:grid-cols-3 xs:gap-5 w-full justify-center items-center lg:pl-10 xl:pl-32 xl:py-10 ">
          <div className="flex xs:flex-col justify-start items-start xs:space-y-3 xl:space-y-10 pt-10 lg:py-10">
            <div className="w-52">
              <Image src={Logo} alt="Wellbenix Logo" className='' />
            </div>
            <div className="">
              <p className="w-full font-bold xs:text-base text-2xl  xl:font-normal text-slate-300 xl:text-sm">We are Website and Ecommerce Agency.<br /> We provide Webiste and  Ecommerce store<br /> development service.</p>
            </div>
            <div className="flex xs:justify-center xs:items-center lg:items-center lg:justify-start space-x-3 ">
              <div className="hover:bg-gradient-to-r from-[#2439ff] to-[#9000ff] group bg-white px-2 rounded-full py-2 hover:scale-90 duration-500">
                <a href="https://www.instagram.com/wellbenix/">
                  <AiOutlineInstagram className="text-2xl cursor-pointer group-hover:text-white text-[#171f42]" />
                </a>
              </div>
              <div className="hover:bg-gradient-to-r from-[#2439ff] to-[#9000ff] group bg-white px-2 rounded-full py-2 hover:scale-90 duration-500">
                <a href="https://www.linkedin.com/in/wellbenix/">
                  <AiFillLinkedin className="text-2xl cursor-pointer group-hover:text-white text-[#171f42]" />
                </a>
              </div>

              <div className="hover:bg-gradient-to-r from-[#2439ff] to-[#9000ff] group bg-white px-2 rounded-full py-2 hover:scale-90 duration-500">
                <a href="https://www.facebook.com/profile.php?id=100089008334978">
                  <AiOutlineFacebook className="text-2xl cursor-pointer group-hover:text-white text-[#171f42]" />
                </a>

              </div>
            </div>
          </div>
          <div className="py-5 md:py-10 w-full ">
            <div className="flex items-center space-x-5">
              <h1 className="text-white font-bold  xl:text-2xl">Help Link</h1>
              <div className="w-14 bg-gradient-to-r from-[#2439ff] to-[#9000ff] h-[4px]">.</div>
            </div>
            <nav className="pt-10 space-y-5 ">
              <li className="flex items-center space-x-5">
                <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">Customers Services</p>
              </li>
              <li className="flex items-center space-x-5">
                <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">IT Department</p>
              </li>
              <li className="flex items-center space-x-5">
                <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">About Our Comp</p>
              </li>
              <li className="flex items-center space-x-5">
                <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">Business Growth</p>
              </li>
              <li className="flex items-center space-x-5">
                <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">Make An Appointment</p>
              </li>
            </nav>
          </div>
          <div className="py-5 md:py-10 w-full ">
            <div className="flex items-center space-x-5">
              <h1 className="text-white font-bold  xl:text-2xl ">Official Link</h1>
              <div className="w-14 bg-gradient-to-r from-[#2439ff] to-[#9000ff] h-[4px]">.</div>
            </div>
            <nav className="pt-10 space-y-5 ">
              <li className="flex items-center space-x-5">
                <div className="bg-[#0125ca] h-10 w-10 flex justify-center items-center rounded-md">
                  <FiPhoneCall className="text-2xl text-white" />
                </div>
                <div className=" flex flex-col  items-start justify-center">
                  <h1 className="text-[#666] text-sm">
                    For Rental Call
                  </h1>
                  <p className="text-white font-semibold">+91 9328027580</p>
                </div>
              </li>
              <li className="flex items-center space-x-5">
                <div className="bg-[#0125ca] h-10 w-10 flex justify-center items-center rounded-md">
                  <CgMail className="text-[30px] text-white" />
                </div>
                <div className=" flex flex-col  items-start justify-center">
                  <h1 className="text-[#666] text-sm">
                    Send us Email
                  </h1>
                  <p className="text-white font-semibold">Wellbenix@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center space-x-5">
                <div className="bg-[#0125ca] h-10 w-10 flex justify-center items-center rounded-md">
                  <MdLocationOn className="text-[29px] text-white" />
                </div>
                <div className=" flex flex-col  items-start justify-center">
                  <h1 className="text-[#666] text-sm">
                    Address
                  </h1>
                  <p className="text-white font-semibold">Ajit Mill Char Rasta.</p>
                </div>
              </li>
            </nav>
          </div>
        </div>
        <div className="w-full xs:py-3 xl:px-20 border-t-[.5px] border-white/10 ">
          <p className="text-white text-center  xl:mt-5 xs:text-xs xl:text-sm">© 2023 wellbenix All Rights Reserved</p>

        </div>
      </div>
    </>
  )
}
