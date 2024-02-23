import cvl from '@/images/logos/cvl.png'
import ljuniversity from '@/images/logos/lj-university.webp'
import antrapreneur from '@/images/logos/antrapreneur.webp'
import FeesManagerLogo from '@/images/logos/FeesManagerLogo.png'
import washon from '@/images/logos/washon.png'
import nsc from '@/images/logos/nasir-sir.png'
import alif from '@/images/logos/Alif.png'
import AlBuqar from '@/images/logos/Al-Buraq.png'
import cbl from '@/images/logos/cbl.png'
import Mehndi from "@/images/logos/mehndi.png"
import platform from '@/images/logos/platform.jpg'
import sultanmobile from '@/images/logos/sultanmobile.jpg'
import sona from '@/images/logos/sona.jpg'
import aldeenar from '@/images/logos/aldeenar.png'
import alzidaan from '@/images/logos/alzidaan.webp'
import beliewhoney from '@/images/logos/beliewhoney.png'
import styled, { keyframes, css } from "styled-components";

const row1 = [
    {
        id: 1,
        image: cvl
    },
    {
        id: 2,
        image: ljuniversity,
    },
    {
        id: 3,
        image: antrapreneur,
    },
    {
        id: 4,
        image: FeesManagerLogo,
    },
    {
        id: 5,
        image: washon,
    },
    {
        id: 6,
        image: nsc,
    },
    {
        id: 7,
        image: alif,
    },
    {
        id: 8,
        image: AlBuqar,
    }
]
const row2 = [
    {
        id: 1,
        image: cbl
    },
    {
        id: 2,
        image: Mehndi
    },
    {
        id: 3,
        image: platform
    },
    {
        id: 4,
        image: alif
    },
    {
        id: 5,
        image: sultanmobile
    },
    {
        id: 6,
        image: sona
    },
    {
        id: 7,
        image: aldeenar
    },
    {
        id: 8,
        image: alzidaan
    },
    {
        id: 9,
        image: beliewhoney
    }
];

export default function Clients() {
    return (
        <>
            <section className=''>

                <div className='px-7 sm:mt-10 lg:mt-20 xl:mt-24'>
                    <h1 className='text-black text-center text-[35px] sm:text-4xl lg:text-[50px] leading-none font-bold'>Long Time Project, with Our
                        <br /> <span className='bg-gradient-to-r from-[#1179fc] to-[#dc82fc] text-transparent bg-clip-text'>Best Partner.</span></h1>
                </div>

                <div className=' flex flex-col justify-center items-center mt-5 xl:mt-10'>
                    <Marquee className='py-5'>
                        <MarqueeGroup className=''>
                            {row1.map((item, index) => (
                                <ImageGroup className=' xs:px-[2px] sm:px-2 flex xs:w-full lg:w-36 ' key={index} >
                                    <Image src={item.image.src} alt='E-commerce website design' className=' xs:p-[2px] xl:p-[10px] object-contain h-full w-full rounded-sm shadow-md' />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup className=''>
                            {row1.map((item, index) => (
                                <ImageGroup className=' xs:px-[2px] sm:px-2 flex xs:w-full lg:w-36 ' key={index}>
                                    <Image src={item.image.src} alt='Best Website design agency' className=' xs:p-[2px] xl:p-[10px] object-contain h-full w-full rounded-sm shadow-md' />

                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                    <Marquee className='py-5'>
                        <MarqueeGroup2 className=''>
                            {row2.map((item, index) => (
                                <ImageGroup className=' xs:px-[2px] sm:px-2 flex xs:w-full lg:w-36' key={index}>
                                    <Image src={item.image.src} alt='Fashion website design' className=' xs:p-[2px] xl:p-[10px] object-contain h-full w-full rounded-sm shadow-md' />

                                </ImageGroup>
                            ))}
                        </MarqueeGroup2>
                        <MarqueeGroup2 className=''>
                            {row2.map((item, index) => (
                                <ImageGroup className=' xs:px-[2px] sm:px-2 flex xs:w-full lg:w-36' key={index}>
                                    <Image src={item.image.src} alt='Fashion ecommerce store' className=' xs:p-[2px] xl:p-[10px] object-contain h-full w-full rounded-sm shadow-md' />

                                </ImageGroup>
                            ))}
                        </MarqueeGroup2>
                    </Marquee>
                </div>

            </section>
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
            place-items: center;
            ${'' /* width: clamp(10rem, 1rem + 40vmin, 30rem); */}
            ${'' /* padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */}
            `;

const Image = styled.img`
            object-fit: contain;
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
            aspect-ratio: 16/9;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            `;
