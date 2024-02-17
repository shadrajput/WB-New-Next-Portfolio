import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image";
import Logo from '../../public/images/logo.png'
import { useRouter } from 'next/router';
import { HiMenu } from "react-icons/hi"
import { BsTelephoneFill } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"



export function Header(props) {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const NavLink = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Us",
      link: "/#AboutUs"
    },
    {
      name: "Service",
      link: "/#Services"
    },
    {
      name: "Portfolio",
      link: "/#Portfolio"
    },
    {
      name: "Contact Us",
      link: "/#ContactUs"
    },
  ]

  const router = useRouter()
  const [menu, setmenu] = useState(false);

  return (
    <>
      {/* <header className={` lg:z-20 2xl:px-20 w-full fixed top-0 z-[999] py-1.5 md:py-0 h-20 duration-300 ${scrollPosition > 0 ? 'bg-white shadow-lg' : ''}  xs:bg-none lg:bg-black `}> */}
      <header className='h-0 lg:h-28 lg:z-20 lg:px-5 2xl:px-28 w-full z-[999]  xl:h-28 duration-300 bg-black flex justify-center items-center'>
        <nav className="relative z-50 text-sm w-full">

          <div className="flex items-center w-full justify-between">

            <div className='flex items-center justify-between w-full lg:w-1/4 px-3 sm:px-5 mt-20 lg:mt-0'>
              <div className=''>
                <Link href="/">
                  <div className='w-32 sm:w-36 md:w-40 cursor-pointer '>
                    <Image src={Logo} alt="fess manager logo" className='' />
                  </div>
                </Link>
              </div>
              <div className='lg:hidden' onClick={() => setmenu(!menu)}>
                {
                  menu ?
                    <RxCross2 className='text-xl xs:text-2xl text-white' />
                    :
                    <HiMenu className='text-xl xs:text-2xl text-white' />
                }
              </div>
            </div>



            <div className={` ${menu ? "py-3 mt-12 top-0 opacity-100  shadow-xl md:shadow-none h-screen " : "top-[-500px] opacity-0 md:opacity-100"} w-full
          lg:static absolute duration-500  md:items-center xl:flex xl:justify-center xl:items-center bg-black`}>

              <div className='lg:hidden flex justify-end p-5' onClick={() => setmenu(!menu)}>
                {
                  menu ?
                    <RxCross2 className='text-xl xs:text-2xl text-white' />
                    :
                    <HiMenu className='text-xl xs:text-2xl text-white' />
                }
              </div>

              <div className='flex flex-col justify-start mt-10 items-center md:justify-start space-y-5 md:space-y-7 h-full lg:space-y-0 '>
              
                <div className='w-full flex justify-center lg:hidden'>
                  <Link href="/">
                    <div className='w-48 md:w-52'>
                      <Image src={Logo} alt="fess manager logo" className='' />
                    </div>
                  </Link>
                </div>

                <div className='flex flex-col items-center space-y-5 text-left w-full px-5 || lg:space-x-7 lg:flex-row xl:w-full 
            lg:items-center lg:space-y-0 lg:justify-center '>
                  {
                    NavLink.map(({ link, name }) => (
                      <Link
                        name={name}
                        key={name}
                        href={link}
                      >
                        <a className="text-white font-bold text-xl md:hover:text-[#1179fc] lg:text-base">
                          {name}
                        </a>
                      </Link>
                    ))
                  }
                </div>
                <div className='w-1/2 flex justify-center pt-5 lg:hidden '>
                  <Link href="https://calendly.com/wellbenix/website-strategy-for-online-sales?month=2024-02">
                    <button className="rounded-full px-10 py-2 md:py-3 bg-[#1179fc] font-bold text-white uppercase hover:bg-white hover:text-[#1179fc] duration-300 ">Book a Call</button>
                  </Link>
                </div>

              </div>
            </div>


            <div className='w-1/2 lg:w-1/3  justify-end hidden lg:block'>
              <Link href="https://calendly.com/wellbenix/website-strategy-for-online-sales?month=2024-02">
                <button className="rounded-full px-10 lg:py-2 xl:py-3 bg-[#1179fc] font-bold text-white uppercase hover:bg-white hover:text-[#1179fc] duration-300 ">Book a Call</button>
              </Link>
            </div>
          </div>

        </nav>
      </header>
    </>

  )
}