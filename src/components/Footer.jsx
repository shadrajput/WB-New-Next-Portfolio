import Image from "next/image";
import Logo from "../../public/images/logo.png"
import footer from "../../public/images/footer.png"
import Link from 'next/link'
import { MdLocationOn } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi"
import { CgMail } from "react-icons/cg"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"
import { ContactUs } from "./ContactUs";


export function Footer() {
  return (
    <>
      <div className='footer-section h-[1500px] sm:h-[1300px] md:h-[1450px] lg:h-[650px] xl:h-[800px] mt-72' >
      
      
        <div className="w-full px-5 lg:px-16 xl:px-32 flex flex-col lg:flex-row items-center " id='ContactUs'>
          <div className="w-full rounded-lg py-10 xl:py-14 -mt-52 z-50 px-7 lg:px-16 xl:px-20 flex flex-col lg:flex-row lg:items-start items-center xl:space-x-10 shadow-xl bg-white">
            <div>
              <h1 className="text-[#0f0f0f] text-5xl lg:text-7xl xl:text-[90px] font-extrabold text-start mb-[20px] ">
                Let's Talk<br /><span className="bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text">Strategy</span>
              </h1>
              <p className="text-black font-semibold text-[20px] text-start mb-[40px]">Let's discuss your success at wellbenix@gmail.com</p>
            </div>
            <ContactUs />
          </div>
        </div>



        <div className="grid xs:grid-cols-1 lg:grid-cols-3 xs:gap-5 w-full justify-start items-start pl-5 lg:pl-10 xl:pl-32 xl:py-10 absolute bottom-20">
          <div className="flex xs:flex-col justify-start items-start xs:space-y-3 xl:space-y-10 pt-10 lg:py-10 2xl:pr-32">
            <div className="w-52">
              <Image src={Logo} alt="Wellbenix Logo" className='' />
            </div>
            <div className="">
              <p className="w-full font-bold xs:text-base text-2xl  xl:font-medium text-white ">We create stunning Ecommerce websites for fashion brands that drive real results for businesses like yours.</p>
            </div>
            <div className="flex xs:justify-center xs:items-center lg:items-center lg:justify-start space-x-3 ">
              <div className="hover:bg-gradient-to-r from-[#2439ff] to-[#9000ff] group bg-white px-2 rounded-full py-2 hover:scale-90 duration-500">
                <a href="https://www.instagram.com/wellbenix/">
                  <AiOutlineInstagram className="text-2xl cursor-pointer group-hover:text-white text-[#171f42]" />
                </a>
              </div>
              <div className="hover:bg-gradient-to-r from-[#2439ff] to-[#9000ff] group bg-white px-2 rounded-full py-2 hover:scale-90 duration-500">
                <a href="https://www.linkedin.com/company/wellbenix/about/">
                  <AiFillLinkedin className="text-2xl cursor-pointer group-hover:text-white text-[#171f42]" />
                </a>
              </div>

              <div className="hover:bg-gradient-to-r from-[#2439ff] to-[#9000ff] group bg-white px-2 rounded-full py-2 hover:scale-90 duration-500">
                <a href="https://www.facebook.com/wellbenix">
                  <AiOutlineFacebook className="text-2xl cursor-pointer group-hover:text-white text-[#171f42]" />
                </a>

              </div>
            </div>
          </div>
          <div className="py-5 md:py-10 w-full ">
            <div className="flex items-center space-x-5">
              <h1 className="text-white font-bold  xl:text-2xl">Contact Out Team</h1>
              <div className="w-14 bg-gradient-to-r from-[#2439ff] to-[#9000ff] h-[4px]">.</div>
            </div>
            <nav className="pt-10 space-y-10 ">
              <Link href="https://www.linkedin.com/in/deepakmarketing/">
                <li className="flex items-center space-x-5">
                  <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">Deepak Prajapati</p>
                </li>
              </Link>
              <Link href="https://www.linkedin.com/in/sadikali-karadiya/">
                <li className="flex items-center space-x-5">
                  <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">SadiqAli Karadiya</p>
                </li>
              </Link>
              <Link href="https://www.linkedin.com/in/shad-rajput/">
                <li className="flex items-center space-x-5">
                  <p className="text-white font-semibold hover:cursor-pointer hover:ml-3 duration-500">Shad Rajput</p>
                </li>
              </Link>
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
                    Call
                  </h1>
                  <p className="text-white font-semibold">+91 7041106701</p>
                </div>
              </li>
              <li className="flex items-center space-x-5">
                <div className="bg-[#0125ca] h-10 w-10 flex justify-center items-center rounded-md">
                  <CgMail className="text-[30px] text-white" />
                </div>
                <div className=" flex flex-col  items-start justify-center">
                  <h1 className="text-[#666] text-sm">
                    Email
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
                  <p className="text-white font-semibold">Safal - 8 , Ajit Mill Char Rasta.</p>
                </div>
              </li>
            </nav>
          </div>
        </div>


        <div className="absolute bottom-7">
          <h1 className="text-white">© 2023 wellbenix All Rights Reserved</h1>
        </div>


      </div>

    </>
  )
}
