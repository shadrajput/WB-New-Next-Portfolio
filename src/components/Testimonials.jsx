import { AiFillStar } from "react-icons/ai"
import Image from 'next/image'
import avatarImage from '@/images/avatars/avtar.jpg'
import { useState } from "react"


const testimonials = [
  {
    id: 1,
    content:
      "Their technical skills and careful work were really important in making a website that shows tournament news, live scores, and lets people sign up easily. Its thanks to their efforts that our volleyball community has thrived."
    ,
    author: {
      name: 'Viral Shah',
      role: 'Trusty at LJ University',
      image: avatarImage,
    },
  },
  {
    id: 2,
    content:
      "'Wellbenix has revolutionized the Washon Laundry Service website. Their technological expertise and thorough comprehension of our company requirements produced a platform that was effective and user-friendly. Our laundry business has experienced significant growth and our clients appreciate the simplicity."
    ,
    author: {
      name: 'Mukesh Prajapati',
      role: 'Founder of WashOn ',
      image: avatarImage,
    },
  },
  {
    id: 3,
    content:
      "The team of Wellbenix have done great work on the Nasir Sir and Classes application. How we handle tuition payments has been changed by their skill in software development. The comprehensive annual and weekly reports are very important for our financial planning."
    ,
    author: {
      name: 'Nasir Sir',
      role: 'Founder of Nasir sir and',
      image: avatarImage,
    },
  },
  {
    id: 4,
    content:
      "Well done to Wellbenix for their great work on the 'Alif School' desktop application.Their skill in creating software made it easier to manage teachers salary and school fees of students.The detailed reports have made our financial record- keeping much simpler."
    ,
    author: {
      name: 'Nasir Sir ',
      role: 'HOD at Alif School',
      image: avatarImage,
    },
  },
  {
    id: 5,
    content:
      "Thank you for transforming our website. Your IT expertise boosted our online presence. It's user-friendly, attractive, and efficiently represents our mattress brand. Exceptional work!",
    author: {
      name: 'Parvej Alam ',
      role: 'CEO at Sona Mattresses',
      image: avatarImage,
    },
  },
  {
    id: 6,
    content:
      "They have really outdone themselves with the 'Al-Deenar' ecommerce website. Our customers now have access to an outstanding variety of Indian clothings for women, thanks to their web building abilities. We are now the go-to place for formal clothes for Indian weddings and festivities."
    ,
    author: {
      name: 'Mushihar Shaikh',
      role: 'Founder of Al-Deenar',
      image: avatarImage,
    },
  },
  {
    id: 7,
    content:
      "A big thank you to Wellbenix for helping us achieve our goal with the 'CBL' website. Their commitment to providing basketball enthusiasts with a fun platform was absolutely amazing.",
    author: {
      name: 'Bhavin Shah',
      role: 'HOD of MCA at LJ University',
      image: avatarImage,
    },
  },
  {
    id: 8,
    content:
      "With the 'Al Buraq' ecommerce website, Wellbenix has produced a treasure.Our fans for scent and attar have had a wonderful shopping experience because to their design and technological abilities.",
    author: {
      name: 'Abid Ali',
      role: 'Founder of Al-Buraq',
      image: avatarImage,
    },
  }
]

export default function Testimonials() {
  const [noOfElement, setnoOfElement] = useState(6)
  const slice = testimonials.slice(0, noOfElement)

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  }
  return (
    <>
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="pt-20 xl:pt-32 xs:px-10 xl:px-20">
        <div className="w-full flex justify-center items-center">

          <h1 className='text-black text-center text-[35px] sm:text-4xl lg:text-[50px] leading-none font-bold'>
            Client's <span className="bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text">Spotlight</span> 
          </h1>
        </div>
        <div className='xl:px-0'>
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {
              slice.map((item, index) => {
                return (
                  <li key={index}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-[#243aff16] w-full">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-[#0f0f0fbf]">
                          {item.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-start space-x-5 border-t border-slate-100 pt-6">
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                          <Image src={item.author.image} alt="" />
                        </div>
                        <div>
                          <div className="font-display text-base text-[#141b35] font-semibold">
                            {item.author.name}
                          </div>
                          <div className="mt-1 text-sm text-[#0f0f0f99] ">
                            {item.author.role}
                          </div>
                        </div>

                      </figcaption>
                    </figure>
                  </li>

                )
              })
            }

          </ul>
        </div>
        {
          slice.length < testimonials.length
            ?
            <div className="flex justify-center w-full items-center pt-10">
              <button
                onClick={() => loadMore()}
                className="rounded-full px-10 py-2 xl:py-3 bg-[#1179fc] font-bold text-white uppercase border-2 hover:bg-white hover:text-[#1179fc] duration-300">
                Load More
              </button>
            </div>
            :
            null
        }
      </section>
    </>
  )
}
