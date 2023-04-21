import Head from 'next/head';
//= Layout
import Default from '@/layouts/default';
//= Page Components
import AltHeader from '@/components/Common/AltHeader';
import Services from '@/components/Home/Services';
import WorkingHours from '@/components/Services/WorkingHours';
import Doctors from '@/components/Home/Doctors';

export default function ServicesPage() {
  return (
    <Default>
      {/* Page Metadata */}
      <Head>
        <title>Varma - Services</title>
        <meta name="description" content="Varma - is the heart and science of medicate test, est in 2015, varma specialise in providing medical accessories and health care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Page Components */}
      <AltHeader pageTitle='Our Services' />
      <Services atServicesPage />
      <WorkingHours />
      <Doctors atServicesPage />
    </Default>
  )
}
