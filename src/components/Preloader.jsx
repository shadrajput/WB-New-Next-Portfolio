import Image from 'next/image'
import avatarImage from '@/images/logos/logo.png'

export default function Testimonials() {
  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center bg-[#F1EEE9]'>
        <Image src={avatarImage} alt="logo" />
      </div>
    </>
  )
}