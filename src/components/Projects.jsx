import { AiFillEye } from "react-icons/ai"
import { AiOutlineLink } from "react-icons/ai"
import Image from "next/image";
import thecvl from '@/images/portfolio/thecvl.png'
import washOn from '@/images/portfolio/washOn.png'
import nasir from '@/images/portfolio/Screenshot (363).png'
import Mehndi from '@/images/portfolio/Screenshot (17).png'
import Alburaq from '@/images/portfolio/Screenshot (275).png'
import Platform from '@/images/portfolio/Screenshot (49).png'
import theCBL from '@/images/portfolio/Screenshot (357).png'
import Alif from '@/images/portfolio/Screenshot (27).png'
import sona from '@/images/portfolio/Screenshot (549).png'
import virtual from '@/images/portfolio/Screenshot (550).png'
import aldeenar from '@/images/portfolio/Screenshot (551).png'
import sultanmobile from '@/images/portfolio/sultanmobile.png'
import alzidan  from '@/images/portfolio/alzidan.png'
import beliewhoney from '@/images/portfolio/beliehoney.png'

export default function Projects() {
    const ProjectData = [
        {
            id: 1,
            Name: "TheCVL",
            Disc: "This is a simple and clean scorekeeper app to count your points and keep track of your volleyball score.",
            Link: "https://cvl.ljku.edu.in/",
            image: thecvl,
            language : "PHP"
        },
        {
            id: 2,
            Name: "WashOn",
            Disc: "Washon is a laundry service that lets you book a pick up in just 1 minute.",
            Link: "https://www.washon.ae/",
            image: washOn,
            language : "React Js"
        },
        {
            id: 3,
            Name: "FeesManager",
            Disc: "This is a desktop application which use to manage student's and staff data in schools and tuition classes and also manage fess and salary of student's and staff.",
            Link: "https://www.feesmanager.in/",
            image: nasir,
            language : "Electron JS"
        },
        {
            id: 4,
            Name: "Al-Shifa Mehndi",
            Disc: "expertly crafted by our team, serves as a powerful lead magnet. It captivates visitors with its engaging design and compelling content, enticing them to take action.",
            Link: "https://al-shifamehndi.netlify.app/",
            image: Mehndi,
            language : "React Js"
        },
        {
            id: 5,
            Name: "Al-Buraq",
            Disc: "This is a simple and clean scorekeeper app to count your points and keep track of your volleyball score.",
            Link: "https://alburaqperfume.com/",
            image: Alburaq,
            language : "WordPress"
        },
        {
            id: 6,
            Name: "TheCBL",
            Disc: "This is a simple and clean scorekeeper app to count your points and keep track of your backetball score.",
            Link: "https://thecbl.in/",
            image: theCBL,
            language : "React Js"
        },
        {
            id: 7,
            Name: "Platform",
            Disc: "We have creatd custom admin dashboard and theme for out client so can easily manage content on their site",
            Link: "https://platform-pillow.com/",
            image: Platform,
            language : "WordPress"
        },
        {
            id: 8,
            Name: "Alif School",
            Disc: "This is a desktop application which use to manage student's and staff data in schools and tuition classes and also manage fess and salary of student's and staff.",
            Link: "https://www.feesmanager.in/",
            image: Alif,
            language : "Electron JS"
        },
        {
            id: 9,
            Name: "Sultan Mobile",
            Disc: "This is a desktop application which use to manage EMI and Phone in Mobile store and also manage fess and salary of student's and staff.",
            Link: "",
            image: sultanmobile,
            language : "Electron JS"
        },
        {
            id: 10,
            Name: "Sona Mattresses",
            Disc: "This is a High quality mattress manufactures and they are supplied all over the india and they provide multiple product of Mattress.",
            Link: "https://www.sonamattresses.com/",
            image: sona,
            language : "NextJs"
        },
        {
            id: 11,
            Name: "VirtualEmployee",
            Disc: "This is a virtual employee compnay and they are help to connect eemployee who need employee.",
            Link: "https://virtualemployees.uk/",
            image: virtual,
            language : "WordPress"
        },
        {
            id: 12,
            Name: "Al-Deenar",
            Disc: "This is a Ecommerce project and client have ladies shoot showroom and they are desing own product and sell online customer in all over India",
            Link: "https://aldeenarfashion.com/",
            image: aldeenar,
            language : "WordPress"
        },
        {
            id: 12,
            Name: "Al-Zidaan",
            Disc: "This is a Ecommerce project and client have ladies shoot showroom and they are desing own product and sell online customer in all over India",
            Link: "https://alzidaan.in/",
            image: alzidan ,
            language : "Shopify"
        },
        {
            id: 12,
            Name: "Believehoney",
            Disc: "This is a Ecommerce project and client have ladies shoot showroom and they are desing own product and sell online customer in all over India",
            Link: "https://www.believehoney.in/",
            image: beliewhoney,
            language : "Shopify"
        }
    ]
    return (
        <>
            <div id="Portfolio" className="xs:py-14 xl:px-28 xs:px-10 xl:py-20">
                <div className="flex flex-col ">
                    <div className='flex justify-center items-center'>
                        <h1 className="uppercase bg-[#2730ed24] mb-5 text-center text-[#0125ca] flex justify-center items-center rounded-md py-1 px-5 text-sm font-semibold ">OUR Projects</h1>
                    </div>
                    <h1 className="text-slate-900 text-[35px] xs:text-center text-left font-popins font-semibold py-5">
                        Some success stories of our <br /> <span className="text-[#0125ca]">project</span> </h1>
                </div>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pt-10">
                    {ProjectData.map((Item, columnIndex) => (
                        <div className=" h-[95%] relative group cursor-pointer overflow-hidden shadow-lg" key={columnIndex} >
                            <div className="bg-[#06092295] hidden group-hover:block duration-500 w-full  xs:h-[165px] sm:h-full xl:h-[200px] absolute z-10 overflow-hidden">
                                <div className="flex flex-col items-center justify-center w-full h-full space-y-2 xl:justify-start xl:mt-5 2xl:justify-center 2xl:mt-0 ">
                                    <h1 className="text-white text-[25px] font-semibold">{Item.Name}</h1>
                                    <h2 className="text-white font-semibold">{Item.language}</h2>
                                    <div className="py-1 bg-white flex justify-center items-center w-14 rounded-md">
                                        <a href={Item.Link}>
                                            <AiOutlineLink className="text-[#0125ca] text-2xl z-10" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Image src={Item.image} alt="fess manager logo" className='rounded-md group-hover:scale-110 duration-500 overflow-hidden' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
