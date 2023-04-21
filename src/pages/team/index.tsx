import Head from 'next/head';
//= Layout
import Default from '@/layouts/default';
//= Page Components
import AltHeader from '@/components/Common/AltHeader';
import Crew from '@/components/Team/Crew';
import Appointment from '@/components/Team/Appointment';

export default function Team() {
  return (
    <Default>
      {/* Page Metadata */}
      <Head>
        <title>Varma - Our Team</title>
        <meta name="description" content="Varma - is the heart and science of medicate test, est in 2015, varma specialise in providing medical accessories and health care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Page Components */}
      <AltHeader pageTitle='The Doctors Crew' />
      <Crew />
      <Appointment />
    </Default>
  )
}
