import { useRef, useState, useEffect } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai"
import { AiOutlineCaretUp } from "react-icons/ai"
import emailjs from "emailjs-com"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = [
    {
        id: 1,
        question: "What does having Managed your services provider?",
        Answer: "Our purpose is to build solutions that remove the barriers preventing peoplefrom doing their best work, and this is at the heart of how we approach our"
    },
    {
        id: 2,
        question: "What you about say your Business palnning?",
        Answer: "We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work."
    },
    {
        id: 3,
        question: "You have a unique way of the working in IT?",
        Answer: "Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart."
    },
    {
        id: 4,
        question: "What types of systems do you support?",
        Answer: "Increase social reach and productivity with our App Directory, a collection of famous applications like Instagram other web design."
    },
    {
        id: 5,
        question: "Can you provide of all IT Managenment services?",
        Answer: "Design studio founded in London and expanded our services, and become a multinational firm, offering services and solutions."
    },
]
export function ContactUs() {
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = useState(false);
    const [Data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [accordionId, setAccordionId] = useState(-1)
    const form = useRef()

    const handleChnage = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const Sendmail = (e) => {
        e.preventDefault();
        setIsLoadingOnSubmit(true)
        emailjs.sendForm("service_ckbpz6l", "template_r97hfq9", form.current, "bjkwlPlPSVmEBzNkm")
            .then(res => {
                console.log(res, res)
                setIsLoadingOnSubmit(false)
                //toaster (Thank you for contacting us)
                toast.success('Thank you for contacting us')
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                })
            }).catch(err => {
                console.log("error", err)
                //toaster (Failed to send email)
                toast.error("Failed to send email")
                setIsLoadingOnSubmit(false)
            })
    }

    const [accordionOpen, setAccordionOpen] = useState(false)

    useEffect(() => {
        setAccordionOpen(false)
    }, [])

    return (
        <>
            <div id='ContactUs' className="xs:px-10 xs:py-14 xl:px-28 xl:py-28 flex xs:flex-col lg:flex-row lg:space-y-0 xl:space-y-0 items-start justify-start w-full lg:space-x-10">
                <div className=" lg:w-[50%] xs:w-ful flex flex-col">
                    <h1 className="font-bold xs:text-3xl xs:text-center xl:text-4xl pb-10">Frequently Asked Question</h1>
                    {
                        Question.map((item, i) => (
                            <div className='py-3' key={i}>
                                <h2>
                                    <button
                                        className="flex group items-center hover:bg-[#0125ca] duration-500 justify-between border px-5 rounded-md w-full text-left font-semibold py-3"
                                        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); setAccordionId(i) }}
                                        aria-expanded={accordionOpen && accordionId == i}
                                        aria-controls={`accordion-text-${i}`}>
                                        <span className='group-hover:text-white text-lg'>{item.question}</span>
                                        <svg className="group-hover:text-white shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
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
                                    <div className="overflow-hidden">
                                        <p className="py-3">
                                            {item.Answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="lg:w-[50%] xs:w-full xs:pt-14 sm:pt-0 ">
                    <h1 className="font-bold xs:text-3xl xs:text-center xl:text-4xl">Contact for Free Consultation</h1>
                    <div className="w-full mt-14">
                        <form action="" className="w-full" ref={form} onSubmit={Sendmail} >
                            <div className="flex xs:flex-col sm:flex-row sm:space-y-0 xs:space-y-10 items-center w-full sm:space-x-10">
                                <div className="w-full">
                                    <input type="text" id="name" name="name" value={Data.name} onChange={handleChnage} required autoComplete="off" placeholder="Your Name*" className="w-full border  border-slate-200 rounded-md h-14" />
                                </div>
                                <div className="w-full">
                                    <input type="text" id="email" name="email" value={Data.email} onChange={handleChnage} required autoComplete="off" placeholder="Email*" className="w-full border border-slate-200 rounded-md h-14" />
                                </div>
                            </div>
                            <div className="flex items-center w-full py-10">
                                <input type="text" id="phone" name="phone" value={Data.phone} onChange={handleChnage} required autoComplete="off" placeholder="Your Phone" className="w-full border border-slate-200 rounded-md h-14" />
                            </div>
                            <div className="flex items-center w-full">
                                <input type="text" id="message" name="message" value={Data.message} onChange={handleChnage} required autoComplete="off" placeholder="Message*" className="w-full border border-slate-200 rounded-md h-14" />
                            </div>
                            <div className="mt-10 w-full justify-center items-center">
                                <button type="submit" className="font-bold bg-gradient-to-r from-[#2439ff] to-[#9000ff] w-40 rounded-md text-white h-14">
                                    {isLoadingOnSubmit ? 'Sending...' : 'Submit Now'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
