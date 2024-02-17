import Image from 'next/image'
import wb from '../../public/images/about.jpg'
import Tilt from 'react-parallax-tilt';

export default function AboutUs() {
  return (
    <>
      <div id="AboutUs" className="mt-20 xl:mt-36 px-7 sm:px-14 flex flex-col md:flex-row items-start md:items-center xl:justify-center space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10 xl:space-x-20  ">

        <div className=' p-2 lg:p-5 rounded-lg md:w-[35%] relative shadow-xl bg-gradient-to-r from-[#117bfc3e] to-[#db82fc58]'>
          <Tilt className="Tilt" options={{ max: 25 }}>
            <div className='mt-1 rounded-lg p-2'>
              <Image src={wb} alt="fess manager logo" className='rounded-lg' />
            </div>
          </Tilt>
        </div>

        <div className=' w-full md:w-[50%] flex flex-col justify-start items-start space-y-5 lg:space-y-10'>
          <h1 className='text-black text-[35px] xl:text-[55px] xl:leading-none font-bold'>Fashion brand's website redesign sparked a 
            <span className='bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text'> huge sales increase.</span></h1>
          <p className='text-[#050917] text-[14px] lg:text-[20px] font-normal'>In the world of marketing, expertise makes all the difference. Drawing from seasoned wisdom, a fashion brand expertly revamped its website. The fresh design attracted more shoppers, resulting in a significant surge in sales. It's proof that leveraging expertise can yield substantial results in the business arena.</p>
        </div>

      </div>
    </>
  )
}
