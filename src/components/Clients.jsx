import C1 from '@/images/logos/lj-university.webp'
import FeesManagerLogo from '@/images/logos/FeesManagerLogo.png'
import washon from '@/images/logos/washon.png'
import C2 from '@/images/logos/antrapreneur.webp'
import C3 from '@/images/logos/cbl.png'
import C4 from '@/images/logos/nasir-sir.png'
import Mehndi from "@/images/logos/mehndi.png"
import C5 from '@/images/logos/platform.jpg'
import AlBuqar from '@/images/logos/Al-Buraq.png'
import C7 from '@/images/logos/Alif.png'
import sultanmobile from '@/images/logos/sultanmobile.jpg'
import C8 from '@/images/logos/sona.jpg'
import C9 from '@/images/logos/aldeenar.png'
import beliewhoney from '@/images/logos/beliewhoney.png'
import alzidaan from '@/images/logos/alzidaan.webp'
import styled, { keyframes, css } from "styled-components";

const row1 = [
    "images/logos/cvl.png",
    "images/logos/lj-university.webp",
    "images/logos/antrapreneur.webp",
    "images/logos/FeesManagerLogo.png",
    "images/logos/washon.png",
    "images/logos/nasir-sir.png",
    "images/logos/Alif.png",
    "images/logos/Al-Buraq.png",
];


const row2 = [
    "images/logos/cbl.png",
    "images/logos/platform.jpg",
    "images/logos/Alif.png",
    "images/logos/sultanmobile.jpg",
    "images/logos/sona.jpg",
    "images/logos/aldeenar.png",
    "images/logos/alzidaan.webp",
    "images/logos/beliewhoney.png",
];

export default function Clients() {
    return (
        <>
            <div className='flex flex-col w-full justify-center items-center mt-10 xs:order-1 lg:order-2 '>
                <div className='flex justify-center items-center lg:justify-start'>
                    <h1 className="uppercase bg-[#2730ed24] mb-5 text-center text-[#0125ca] flex justify-center items-center rounded-md py-1 px-5 text-sm font-semibold ">OUR CLIENTS</h1>
                </div>
                <h1 className="text-slate-900 text-center text-3xl xl:text-4xl w-full font-bold pb-5">
                    Long Time Project, with Our<br /><span className='text-[#0125ca]'>Best Partner</span>
                </h1>
                <p className="text-[#666666] xs:text-sm text-center">We’ve been lucky to collaborate with a long list of customers, located in and out of the country. Thanks to them we have<br /> grown as professionals.</p>
            </div>
            <div className='flex flex-col justify-center items-center sm:px-5 xl:px-20'>
                <Marquee className='py-5'>
                    <MarqueeGroup>
                        {row1.map((el) => (
                            <ImageGroup className='px-2'>
                                <Image src={el} className='xs:p-1 p-2 xl:p-[10px]' />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {row1.map((el) => (
                            <ImageGroup className='px-2'>
                                <Image src={el} className='xs:p-1 p-2 xl:p-[10px]' />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                </Marquee>
                <Marquee className='py-5'>
                    <MarqueeGroup2 className=''>
                        {row2.map((el) => (
                            <ImageGroup className='px-2'>
                                <Image src={el} className='xs:p-1 p-2 xl:p-[10px]' />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                    <MarqueeGroup2>
                        {row2.map((el) => (
                            <ImageGroup className='px-2'>
                                <Image src={el} className='xs:p-1 p-2 xl:p-[10px]' />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                </Marquee>
            </div>
        </>
    )
}


const Marquee = styled.div`
            display: flex;
            width: 100%;
            overflow: hidden;
            user-select: none;

            mask-image: linear-gradient(
            to right,
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 10%,
            hsl(0 0% 0% / 1) 90%,
            hsl(0 0% 0% / 0)
            );
            `;

const scrollX = keyframes`
            from {
                left: translateX(0);
  }
            to {
                transform: translateX(-100%);
  }
            `;

const common = css`
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
            white-space: nowrap;
            width: 100%;
            animation: ${scrollX} 30s linear infinite;
            `;

const MarqueeGroup = styled.div`
            ${common}
            `;
const MarqueeGroup2 = styled.div`
            ${common}
            animation-direction: reverse;
            animation-delay: -3s;
            `;

const ImageGroup = styled.div`
            display: grid;
            place-items: center;
            width: clamp(10rem, 1rem + 40vmin, 30rem);
            ${'' /* padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */}
            `;

const Image = styled.img`
            object-fit: contain;
            width: 100%;
            height: 100%;
            /* border: 1px solid black; */
            border-radius: 0.5rem;
            aspect-ratio: 16/9;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            `;
