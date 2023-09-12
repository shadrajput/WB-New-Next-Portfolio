import { AiFillStar } from "react-icons/ai"
import Image from 'next/image'
import avatarImage from '@/images/avatars/avtar.jpg'


const testimonials = [
  [
    {
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
      content:
        "'Wellbenix has revolutionized the Washon Laundry Service website. Their technological expertise and thorough comprehension of our company requirements produced a platform that was effective and user-friendly. Our laundry business has experienced significant growth and our clients appreciate the simplicity."
      ,
      author: {
        name: 'Mukesh Prajapati',
        role: 'Founder of WashOn ',
        image: avatarImage,
      },
    },
  ],
  [
    {
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
      content:
        "Well done to Wellbenix for their great work on the 'Alif School' desktop application.Their skill in creating software made it easier to manage teachers salary and school fees of students.The detailed reports have made our financial record- keeping much simpler."
      ,
      author: {
        name: 'Nasir Sir ',
        role: 'CEO at Alif School',
        image: avatarImage,
      },
    },
  ],
  [
    {
      content:
        "Thank you for transforming our website. Your IT expertise boosted our online presence. It's user-friendly, attractive, and efficiently represents our mattress brand. Exceptional work!",
      author: {
        name: 'Parvej Alama ',
        role: 'CEO at Sona Mattresses',
        image: avatarImage,
      },
    },
    {
      content:
      "They have really outdone themselves with the 'Al-Deenar' ecommerce website. Our customers now have access to an outstanding variety of Indian clothings for women, thanks to their web building abilities. We are now the go-to place for formal clothes for Indian weddings and festivities."
      ,
      author: {
        name: 'Mehfooz Bhai',
        role: 'Founder of Al-Deenar',
        image: avatarImage,
      },
    },
  ],
  [
    {
      content:
        "A big thank you to Wellbenix for helping us achieve our goal with the 'CBL' website. Their commitment to providing basketball enthusiasts with a fun platform was absolutely amazing.",
      author: {
        name: 'Bhavin Sir',
        role: 'HOD of MCA at LJ University',
        image: avatarImage,
      },
    },
    {
      content:
        "With the 'Al Buraq' ecommerce website, Wellbenix has produced a treasure.Our fans for scent and attar have had a wonderful shopping experience because to their design and technological abilities.",
      author: {
        name: 'Abid Ali',
        role: 'Founder of Al-Buraq',
        image: avatarImage,
      },
    }
  ],
]

export default function Testimonials() {
  return (
    <>
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 pt-28 xs:px-10 xs:py-14 xl:px-20">
        <div className="w-full flex justify-center items-center ">
          <div className='max-w-3xl'>
            <div className='flex justify-center items-center'>
              <h1 className="uppercase bg-[#2730ed24] text-[#0125ca] font-semibold text-center rounded-md py-1 px-3 text-sm ">CLIENT’S WORD</h1>
            </div>
            <h2
              id="testimonials-title"
              className="font-display text-3xl font-semibold tracking-tight text-center text-slate-900 sm:text-4xl py-3"
            >
              Appreciations From Our Satisfied Customers.
            </h2>
            <p className="mt-4 text-base tracking-tight text-center text-slate-500">
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>
        </div>
        <div className='xl:px-0'>
          <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4">
            {testimonials.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul className="space-y-6 sm:space-y-8">
                  {column.map((testimonial, testimonialIndex) => (
                    <li key={testimonialIndex}>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">

                        <div className='py-4 flex space-x-2'>
                          <AiFillStar className='text-yellow-400 text-lg' />
                          <AiFillStar className='text-yellow-400 text-lg' />
                          <AiFillStar className='text-yellow-400 text-lg' />
                          <AiFillStar className='text-yellow-400 text-lg' />
                          <AiFillStar className='text-yellow-400 text-lg' />
                        </div>
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-[#141b35] font-semibold">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-[#0125ca] ">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                            <Image src={testimonial.author.image} alt="" />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
