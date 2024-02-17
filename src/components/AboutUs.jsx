import Image from 'next/image'
import wb from '../../public/images/about.jpg'
import Tilt from 'react-parallax-tilt';

export default function AboutUs() {
  return (
    <>
      <div id="AboutUs" className="mt-20 xl:mt-36 px-7 sm:px-14 flex flex-col md:flex-row items-start md:items-center xl:justify-center space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10 xl:space-x-20  ">

        <div className=' p-2 lg:p-5 rounded-lg md:w-[35%] relative shadow-xl bg-gradient-to-r from-[#117bfc3e] to-[#db82fc58]'>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className='bg-[#b47cfd] rounded-full absolute flex justify-center items-center -top-10 z-50 -left-7 lg:-left-10 h-16 w-16 sm:h-20 lg:h-28 sm:w-20 lg:w-28 border-2 border-white '>
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="circlePath" d="M 60,60 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0" fill="transparent" />
                </defs>
                <text font-size="16" font-family="Arial" fill="white" letter-spacing="3.5">
                  <textPath href="#circlePath" stroke="white" stroke-width="1" stroke-linejoin="round">Premium Support & Services</textPath>
                </text>
              </svg>
              <div className='border-2 border-white w-10 h-10 sm:w-12 sm:h-12 lg:h-[70px]  lg:w-[70px] absolute rounded-full'>

              </div>
            </div>
            <div className='mt-1 rounded-lg p-2'>
              <Image src={wb} alt="fess manager logo" className='rounded-lg' />
            </div>
          </Tilt>
        </div>

        <div className=' w-full md:w-[50%] flex flex-col justify-start items-start space-y-5 lg:space-y-10'>
          <h1 className='text-black text-4xl xl:text-[55px] xl:leading-none font-bold'>Fashion brand's website redesign sparked a 
            <span className='bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text'> huge sales increase.</span></h1>
          <p className='text-[#050917] text-sm lg:text-[20px] font-normal'>In the world of marketing, expertise makes all the difference. Drawing from seasoned wisdom, a fashion brand expertly revamped its website. The fresh design attracted more shoppers, resulting in a significant surge in sales. It's proof that leveraging expertise can yield substantial results in the business arena.</p>
        </div>

      </div>
    </>
  )
}
