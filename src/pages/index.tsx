import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Counter from '@/components/Counter/Counter'
import Information from '@/components/Information/Information'
import Services from '@/components/Services/Services'
import CallToAction from '@/components/CallToAction/CallToAction'
import ContactComponent from '@/components/Contact/ContactComponent'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
    <Navbar />
    <Hero />
    <Information />
    <Counter />
    <Services />
    <CallToAction />
    <ContactComponent />
    <Footer />
    </>
  )
}
