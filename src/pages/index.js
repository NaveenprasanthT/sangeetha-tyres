import Head from 'next/head'
import HowWeWork from '@/Components/Home/HowWeWork'
import CarSection from '@/Components/Home/CarSection'
import TyreBrands from '@/Components/Home/TyreBrands'
import OurVision from '@/Components/Home/OurVision'
import Contact from '@/Components/Common/Contact'
import ServicesMain from '@/Components/Home/ServicesMain'
import Header from '@/Components/Home/Header'
import Testimonials from '@/Components/Common/testimonials'
import Faq from '@/Components/Common/Faq'
import Rolling from '@/Components/Home/Rolling'
import Search from '@/Components/Home/Search'
import Marq from '@/Components/Home/marquee'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sangeetha tyres</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <Marq />
        <Search />
        <ServicesMain />
        <HowWeWork />
        <CarSection />
        <TyreBrands />
        {/* <Rolling /> */}
        <OurVision />
        <Testimonials />
        <Contact />
        <Faq />
      </>
    </>
  )
}
