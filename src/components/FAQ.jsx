import { useRef, useState, useEffect } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineCaretUp } from "react-icons/ai"
import emailjs from "emailjs-com"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = [
    {
        id: 1,
        question: "Which company is best for web designing in India ?",
        Answer: "Wellbenix Fashion Ecommerce Web Design Agency is renowned for its top-notch web design services in India, blending creativity and functionality to create stunning online platforms for businesses."
    },
    {
        id: 2,
        question: "How much should I pay a web designer ?",
        Answer: "The cost of hiring a web designer can vary based on factors like project complexity, features required, and the experience of the designer. At Wellbenix Fashion, we offer competitive pricing tailored to your specific needs and budget."
    },
    {
        id: 3,
        question: "How do I hire a web design company ?",
        Answer: "Hiring a web design company like Wellbenix Fashion is simple. Reach out to us through our website or contact us directly. We'll discuss your requirements, provide a tailored solution, and guide you through the process seamlessly."
    },
    {
        id: 4,
        question: "How many hours does it take to design a website ?",
        Answer: "The time it takes to design a website depends on various factors such as project scope, design complexity, and client feedback cycles. Typically, Wellbenix Fashion strives to deliver high-quality websites within a reasonable timeframe, ensuring efficiency without compromising on quality."
    },
    {
        id: 5,
        question: "How much does it cost to build an eCommerce website ?",
        Answer: "The cost of building an eCommerce website can vary based on features like design complexity, e-commerce functionality, integrations, and more. At Wellbenix Fashion, we offer transparent pricing structures and customizable packages to suit your specific requirements and budget."
    },
    {
        id: 5,
        question: "Can you build a website in a day? ",
        Answer: "While building a website in a day may not be feasible for complex projects, Wellbenix Fashion excels in delivering efficient solutions without compromising quality. We strive to streamline the design and development process to meet your deadlines effectively while ensuring a high standard of workmanship."
    },
]
export function FAQ() {

    const [accordionId, setAccordionId] = useState(-1)

    const [accordionOpen, setAccordionOpen] = useState(false)

    useEffect(() => {
        setAccordionOpen(false)
    }, [])

    return (
        <>
            <div  className="px-7 mt-16 md:mt-24 xl:px-36 justify-center w-full">
                <div>
                    <h1 className='text-black text-center text-[35px] sm:text-4xl  lg:text-[50px] leading-none font-bold'>Frequantly Ask
                        <br /> <span className='bg-gradient-to-r from-[#2439ff] to-[#9000ff] text-transparent bg-clip-text'>Question.</span></h1>
                </div>
                <div className="w-ful flex flex-col mt-10 xl:mt-20 lg:px-20 xl:px-32">
                    {
                        Question.map((item, i) => (
                            <div className='mb-8' key={i}>
                                <h2>
                                    <button
                                        className="flex group items-center justify-between shadow-xl shadow-[#243aff16] px-5 rounded-md w-full text-left font-semibold py-5"
                                        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); setAccordionId(i) }}
                                        aria-expanded={accordionOpen && accordionId == i}
                                        aria-controls={`accordion-text-${i}`}>
                                        <span className='text-sm md:text-lg'>{item.question}</span>
                                        <svg className="shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center  transition duration-200 ease-out ${accordionOpen && accordionId == i && '!rotate-180'}`} />
                                            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90  transition duration-200 ease-out ${accordionOpen && accordionId == i && '!rotate-180'}`} />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id={`accordion-text-${i}`}
                                    role="region"
                                    aria-labelledby={`accordion-title-${i}`}
                                    className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen && accordionId == i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden bg-[#243aff16] text-sm md:text-lg rounded-b-lg px-10 ">
                                        <p className="py-3">
                                            {item.Answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
