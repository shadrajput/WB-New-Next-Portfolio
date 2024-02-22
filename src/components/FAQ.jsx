import { useRef, useState, useEffect } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineCaretUp } from "react-icons/ai"
import emailjs from "emailjs-com"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = [
    {
        id: 1,
        question: "Can you build a webiste in a day ?",
        Answer: "Our purpose is to build solutions that remove the barriers preventing peoplefrom doing their best work, and this is at the heart of how we approach our"
    },
    {
        id: 2,
        question: "How much does it cost to build an eCommerce website?",
        Answer: "We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work."
    },
    {
        id: 3,
        question: "How many hourse does it take to design a website ?",
        Answer: "Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart."
    },
    {
        id: 4,
        question: "How do I hire a web design company ?",
        Answer: "Increase social reach and productivity with our App Directory, a collection of famous applications like Instagram other web design."
    },
    {
        id: 5,
        question: "How much should I pay a web designer ?",
        Answer: "Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions."
    },
    {
        id: 5,
        question: "Which company is best for web designing in india ?",
        Answer: "Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions."
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
