import { Hero } from '@/components/Hero'
import TotalClientsProjects from '@/components/TClients&Projecta'
import Services from '@/components/Services'
import GetTouch from '@/components/GetTouch'
import Testimonials from '@/components/Testimonials'
import GoToTop from '@/components/GoToTop'
import Clients from '@/components/Clients'
import AboutUs from '@/components/AboutUs'
import Projects from '@/components/Projects'
import Technology from '@/components/Technology'
import { ContactUs } from '@/components/ContactUs'


export default function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <AboutUs />
            <Services />
            {/* <TotalClientsProjects /> */}
            <Technology />
            <Projects />
            <GetTouch />
            {/* <Testimonials /> */}
            <ContactUs />
            <GoToTop />

        </>
    )
}
