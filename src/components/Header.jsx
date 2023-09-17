import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from "next/image";
import Logo from '../../public/images/BLUE.png'
import { useRouter } from 'next/router';
import { HiMenu } from "react-icons/hi"
import { BsTelephoneFill } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"


export function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header className={` lg:z-20 2xl:px-20 w-full fixed top-0 z-[999] py-1.5 md:py-0 xl:py-0 duration-300 ${scrollPosition > 0 ? 'bg-white shadow-lg' : ''} `}>
      <nav className="relative z-50 text-sm w-full">
        <div className="flex flex-col md:flex-row items-center w-full xl:justify-between">
          <div className='flex items-center  justify-between w-full md:w-52 xl:w-0 xs:px-3 xs:py-1'>
            <div>
              <Link href="/">
                <div className='w-24 sm:w-32 xl:w-40 cursor-pointer '>
                  <Image src={Logo} alt="fess manager logo" className='' />
                </div>
              </Link>
            </div>
            <div className='md:hidden' onClick={() => setmenu(!menu)}>
              {
                menu ?
                  <RxCross2 className='text-xl xs:text-2xl' />
                  :
                  <HiMenu className='text-xl xs:text-2xl' />
              }
            </div>
          </div>
          <div className={` ${menu ? "xs:top-10 sm:top-12 opacity-100  bg-white shadow-xl md:shadow-none " : "top-[-500px] opacity-0 md:opacity-100"}  w-full
          md:static py-5 sm:py-6 xl:py-6 md:pt-5 absolute duration-500 md:flex md:items-center  md:mr-0 lg:mr-16 xl:mr-0 xl:flex xl:justify-end xl:items-center`}>
            <div className='flex flex-col h-full items-start space-y-5 text-left w-full px-5 || md:space-x-7 md:flex-row xl:w-full 
            md:items-center md:space-y-0 md:justify-end '>
              {
                NavLink.map(({ link, name }) => (
                  <Link
                    name={name}
                    key={name}
                    href={link}
                  >
                    <a className=" text-[#0126ca] md:text-[#060922] font-semibold md:hover:text-[#0126ca] md:hover:border-b-2 md:hover:border-[#0126ca] duration-200 text-[15px]">
                      {name}
                    </a>
                  </Link>
                ))
              }
              <div className='flex items-start space-x-3 md:hidden xl:flex'>
                <div className='bg-[#0125ca] w-11 h-11 flex justify-center items-center rounded-full'>
                  <BsTelephoneFill className='text-white group-hover:text-[#171f42] text-xl' />
                </div>
                <div className='flex-col flex items-start '>
                  <span className='text-sm'>Call Any Time</span>
                  <h1 className='font-bold text-[17px] xl:text-xl xs:text-[#0126caa8] text-white'>+91  9328027580</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}