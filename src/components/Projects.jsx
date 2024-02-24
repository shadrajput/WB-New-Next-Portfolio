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
import alzidan from '@/images/portfolio/alzidan.png'
import beliewhoney from '@/images/portfolio/beliehoney.png'
import { useState } from "react"
import Link from 'next/link'


const ProjectData = [
    {
        id: 1,
        Name: "Believehoney",
        description: "This is an online honey store, where customers can buy honey.",
        Link: "https://www.believehoney.in/",
        image: beliewhoney,
        language: "Shopify"
    },
    {
        id: 2,
        Name: "CBL",
        description: "This site is for basketball enthusiasts, where they can register as a player, create team, host tournaments, view live score and more.",
        Link: "https://thecbl.in/",
        image: theCBL,
        language: "React Js, Node Js, PostgreSQL"
    },
    {
        id: 3,
        Name: "Al-Buraq",
        description: "Perfumes and attar store",
        Link: "https://alburaqperfume.com/",
        image: Alburaq,
        language: "WordPress"
    },
    {
        id: 4,
        Name: "Sona Mattresses",
        description: "This is a High quality mattress manufactures and they are supplied all over the india and they provide multiple product of Mattress.",
        Link: "https://www.sonamattresses.com/",
        image: sona,
        language: "Next Js"
    },
    {
        id: 5,
        Name: "VirtualEmployee",
        description: "This is a virtual employee company and they are providing the service of virtual assistant who works for you.",
        Link: "https://virtualemployees.uk/",
        image: virtual,
        language: "WordPress"
    },
    {
        id: 6,
        Name: "Al-Deenar",
        description: "This is a Ecommerce project having women dresses. They design their own product and sell to customers all over India",
        Link: "https://aldeenarfashion.com/",
        image: aldeenar,
        language: "WordPress"
    },
    {
        id: 7,
        Name: "Al-Zidaan",
        description: "Online jeans store made in shopify",
        Link: "https://alzidaan.in/",
        image: alzidan,
        language: "Shopify"
    },

    {
        id: 8,
        Name: "WashOn",
        description: "Washon is a laundry service that lets you book a pick up in just 1 minute.",
        Link: "https://www.washon.ae/",
        image: washOn,
        language: "Mern Stack"
    },
    {
        id: 9,
        Name: "FeesManager",
        description: "This is a desktop application which use to manage student's and staff data in schools and tuition classes and also manage fess and salary of student's and staff.",
        Link: "https://www.youtube.com/watch?v=9PxL5w-nd_U",
        image: nasir,
        language: "Electron Js"
    },
    {
        id: 10,
        Name: "Al-Shifa Mehndi",
        description: "Providing services of drawing mehndi on ladies hand.",
        Link: "https://al-shifamehndi.netlify.app/",
        image: Mehndi,
        language: "React Js"
    },

    {
        id: 11,
        Name: "Platform",
        description: "Catalog showcasing site for different types of pillows.",
        Link: "https://platform-pillow.com/",
        image: Platform,
        language: "WordPress"
    },
    {
        id: 12,
        Name: "Alif School",
        description: "This is a desktop application which use to manage student's and staff data in schools and tuition classes and also manage fess and salary of student's and staff.",
        Link: "https://www.youtube.com/watch?v=9PxL5w-nd_U",
        image: Alif,
        language: "Electron Js"
    },
    {
        id: 13,
        Name: "Sultan Mobile",
        description: "This is a desktop application which use to manage EMI of the phones which are being sell to customers.",
        Link: "https://www.youtube.com/watch?v=9PxL5w-nd_U",
        image: sultanmobile,
        language: "Electron Js"
    },



]


export default function Projects() {


    const [noOfElement, setnoOfElement] = useState(4)
    const slice = ProjectData.slice(0, noOfElement)

    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement);
    }

    return (
        <>
            <div id="portfolio" className=" project-section px-7 mt-20 sm:mt-24 lg:mt-32 xl:px-36">
                <div className="flex flex-col ">

                    <h1 className="text-black text-center text-[30px] sm:text-[35px] lg:text-[50px] leading-none font-bold">
                        Unleashing the Power of Innovation <br /> <span className="bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text">and Creativity.</span> </h1>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 xl:gap-20 mt-10 xl:mt-20">
                    {slice.map((Item, columnIndex) => (
                        <Link href={Item.Link} key={columnIndex}>
                            <a target="_blank">
                                <div className="rounded-2xl h-[170px] lg:h-[230px] xl:h-[310px] bg-cover relative group cursor-pointer  overflow-hidden" key={columnIndex}>
                                    <Image className='block object-cover object-center group-hover:scale-110 duration-500 ' src={Item.image} height={1000} alt="" />
                                    <div className="bg-gradient-to-t from-black h-1/2 xl:h-1/3 bottom-0 w-full absolute">
                                        .
                                    </div>
                                    <div className=" p-3 lg:p-5 xl:p-7 rounded-2xl w-full  absolute group-hover:translate-y-96 bottom-0 flex flex-col justify-start space-y-5 duration-500">
                                        <h1 className="text-white font-medium font-popins text-2xl  xl:text-3xl text-center">{Item.Name}</h1>
                                    </div>
                                    <div className="bg-gradient-to-r from-[#1179fc] to-[#dc82fc] space-y-5 flex flex-col justify-center items-center -translate-y-96 group-hover:translate-y-0 duration-500 h-full w-full absolute top-0 ">
                                        {/* <h2 className="text-white xl:text-xl text-center mx-20">{Item.description}</h2> */}
                                        <p className="bg-white rounded-full font-semibold px-3 py-1 w-40 text-center">{Item.language}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>

                {
                    slice.length < ProjectData.length
                        ?
                        <div className="flex justify-center w-full items-center mt-10 xl:pt-12">
                            <button
                                onClick={() => loadMore()}
                                className="rounded-full px-10 py-2 xl:py-3 bg-[#1179fc] font-bold text-white uppercase border-2 hover:bg-white hover:text-[#1179fc] duration-300">
                                Load More
                            </button>
                        </div>
                        :
                        null
                }


            </div>
        </>
    )
}
