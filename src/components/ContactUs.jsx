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
            <div className="lg:w-[50%] xs:w-full sm:pt-0 ">
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
                    <div className="mt-10 w-full flex items-center justify-center lg:justify-end lg:items-end">
                        <button type="submit" className="rounded-full px-10 py-2 xl:py-3 bg-[#1179fc] font-bold text-white uppercase border-2 hover:bg-white hover:text-[#1179fc] duration-300">
                            {isLoadingOnSubmit ? 'Sending...' : 'Submit Now'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
