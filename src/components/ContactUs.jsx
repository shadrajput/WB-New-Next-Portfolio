import { useRef, useState } from 'react';
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
    const [selected, setSelected] = useState(null);
    const form = useRef()

    const Sendmail = (e) => {
        e.preventDefault();
        setIsLoadingOnSubmit(true)
        emailjs.sendForm("service_ckbpz6l", "template_r97hfq9", form.current, "bjkwlPlPSVmEBzNkm")
            .then(res => {
                console.log(res, res)
                setIsLoadingOnSubmit(false)
                document.getElementById('Name').value = ' '
                document.getElementById('email').value = ' '
                document.getElementById('phone').value = ' '
                document.getElementById('message').value = ' '
            }).catch(err => {
                console.log("error", err)
                setIsLoadingOnSubmit(true)
            })
    }

    const Toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <>
            <div id='ContactUs' className="xs:px-10 xs:py-14 xl:px-28 xl:py-28 flex xs:flex-col lg:flex-row lg:space-y-0 xl:space-y-0 items-start justify-start w-full lg:space-x-10">
                <div className="xl:w-[50%] xs:w-full ">
                    <h1 className="font-bold xs:text-3xl xs:text-center xl:text-4xl">Freequently Asked Question</h1>
                    <div className="grid grid-rows-5 mt-10 xl:mt-14 gap-7">
                        {
                            Question.map((item, i) => (
                                <div className="" key={i} >
                                    <div className="border border-slate-200 group w-full hover:bg-[#0125ca] duration-500 px-5 rounded-md h-14    hover:cursor-pointer flex justify-between items-center">
                                        <h1 className="font-semibold xs:text-sm sm:text-base xl:text-lg text-[#08203a] group-hover:text-white">
                                            {item.question}
                                        </h1>
                                        <span className='text-2xl group-hover:text-white'>{selected === i ? "-" : "+"}</span>
                                        {/* {
                                            selected === i ?
                                                <span>-</span>
                                                :
                                                
                                                <AiOutlineCaretDown className="text-[#08203a] group-hover:text-white text-lg" />
                                        } */}
                                    </div>
                                    <div className={selected === i ? "content-show" : "content"} >
                                        {item.Answer}
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className="xl:w-[50%] xs:w-full ">
                    <h1 className="font-bold xs:text-3xl xs:text-center xl:text-4xl">Make An Free IT Consultant</h1>
                    <div className="w-full mt-14">
                        <form action="" className="w-full" onSubmit={Sendmail} >
                            <div className="flex xs:flex-col sm:flex-row sm:space-y-0 xs:space-y-10 items-center w-full sm:space-x-10">
                                <div className="w-full">
                                    <input type="text" id="name" name="name" required autoComplete="off" placeholder="Your Name*" className="w-full border  border-slate-200 rounded-md h-14" />
                                    {/* <p className="form-error text-red-500 text-sm mt-1 ml-3 font-medium">{errors.name}</p> */}
                                </div>
                                <div className="w-full">
                                    <input type="text" id="email" name="email" required autoComplete="off" placeholder="EMail*" className="w-full border border-slate-200 rounded-md h-14" />
                                    {/* <p className="form-error text-red-500 text-sm mt-1 ml-3 font-medium">{errors.mail}</p> */}
                                </div>
                            </div>
                            <div className="flex items-center w-full py-10">
                                <input type="text" id="phone" name="phone" required autoComplete="off" placeholder="Your Phone" className="w-full border border-slate-200 rounded-md h-14" />
                            </div>
                            <div className="flex items-center w-full">
                                <input type="text" id="message" name="message" va required autoComplete="off" placeholder="Message*" className="w-full border border-slate-200 rounded-md h-14" />
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
