import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import "react-toastify/dist/ReactToastify.css";
import { Hero } from '@/components/Hero';
import Link from 'next/link'
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
      <Head>
        <title>Wellbenix - IT Solution</title>
        <meta
          name="Wellbenix "
          content="Best E-commerce webiste development Company" />

        <meta name="facebook-domain-verification" content="wdq3rkb624gnbazwzhrej9w9qldfc6" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Clients />
        <AboutUs />
        <Services />
        {/* <TotalClientsProjects /> */}
        <Technology />
        <Projects />
        <GetTouch />
        <Testimonials />
        <ContactUs />
        <GoToTop />
      </main>
      <Footer />

    </>
  )
}
