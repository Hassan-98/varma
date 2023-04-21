import Head from 'next/head';
//= Layout
import Default from '@/layouts/default';
//= Page Components
import Header from '@/components/Home/Header';
import Services from '@/components/Home/Services';
import About from '@/components/Home/About';
import Appointment from '@/components/Home/Appointment';
import SpecialCare from '@/components/Home/SpecialCare';
import WhyChoose from '@/components/Home/WhyChoose';
import Doctors from '@/components/Home/Doctors';
import Feedback from '@/components/Home/Feedback';

export default function Home() {
  return (
    <Default>
      {/* Page Metadata */}
      <Head>
        <title>Varma - Home</title>
        <meta name="description" content="Varma - is the heart and science of medicate test, est in 2015, varma specialise in providing medical accessories and health care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Page Components */}
      <Header />
      <Services />
      <About />
      <Appointment />
      <SpecialCare />
      <WhyChoose />
      <Doctors />
      <Feedback />
    </Default>
  )
}
