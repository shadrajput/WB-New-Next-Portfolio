import { useRef, useState, useEffect } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai"
import { AiOutlineCaretUp } from "react-icons/ai"
import emailjs from "emailjs-com"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
