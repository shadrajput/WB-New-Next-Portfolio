import Image from 'next/image'
import html from '../../public/images/languages/html-5.png'
import css from '../../public/images/languages/css-3.png'
import tailwindcss from '../../public/images/languages/tailwindcss.png'
import next from '../../public/images/languages/next.png'
import javascript from '../../public/images/languages/javascript.png'
import react from '../../public/images/languages/react.png'
import electron from '../../public/images/languages/electron.png'
import nodejs from '../../public/images/languages/nodejs.png'
import php from '../../public/images/languages/php.png'
import mysql from '../../public/images/languages/mysql.png'
import mongodb from '../../public/images/languages/mongodb.png'
import wordpress from '../../public/images/languages/wordpress.png'

export default function Technology() {
    return (
        <div className='xs:py-14 xs:px-10 xl:px-28 xl:py-20'>
            <div className="w-full flex justify-center items-center ">
                <div className='max-w-3xl'>
                    <div className='flex justify-center items-center'>
                        <h1 className="uppercase bg-[#2730ed24] text-[#0125ca] font-semibold text-center rounded-md py-1 px-3 text-sm ">TECHNOLOGIES</h1>
                    </div>
                    <p className="text-2xl text-center pt-10 font-semibold "> Technologies we use to build applications
                    </p>
                </div>
            </div>

            <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 gap-7'>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={wordpress} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>WordPress</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105 '>
                    <Image src={html} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>HTML</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={css} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>CSS</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={javascript} alt="fess manager logo" width={45} height={45} className='' />
                    <h1 className='text-lg font-semibold ml-2'>JS</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={tailwindcss} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>Tailwind CSS</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={next} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>NextJs</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={react} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>React JS</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={electron} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>Electron JS</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={nodejs} alt="fess manager logo" width={45} height={45} className='' />
                    <h1 className='text-lg font-semibold ml-2'>Node JS</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={php} alt="fess manager logo" width={45} height={45} className='' />
                    <h1 className='text-lg font-semibold ml-2'>PHP</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={mysql} alt="fess manager logo" width={80} height={45} className='' />
                    <h1 className='text-lg font-semibold ml-2'>MYSQL</h1>
                </div>
                <div className='bg-[#f6f6f6] hover:bg-blue-50 duration-500 rounded-md flex items-center px-8 py-5 shadow-md hover:scale-105'>
                    <Image src={mongodb} alt="fess manager logo" width={40} height={40} className='' />
                    <h1 className='text-lg font-semibold ml-2'>MongoDB</h1>
                </div>
               
            </div>

        </div>
    )
}

