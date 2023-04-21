import Head from 'next/head';
//= Layout
import Default from '@/layouts/default';
//= Page Components
import AltHeader from '@/components/Common/AltHeader';
import Consultations from '@/components/About/Consultations';
import Info from '@/components/About/Info';
import Values from '@/components/About/Values';

export default function About() {
  return (
    <Default>
      {/* Page Metadata */}
      <Head>
        <title>Varma - About us</title>
        <meta name="description" content="Varma - is the heart and science of medicate test, est in 2015, varma specialise in providing medical accessories and health care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Page Components */}
      <AltHeader pageTitle='About Varma' />
      <Info />
      <Consultations />
      <Values />
    </Default>
  )
}
