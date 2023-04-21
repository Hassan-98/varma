import Head from 'next/head';
//= Layout
import Default from '@/layouts/default';
//= Page Components
import AltHeader from '@/components/Common/AltHeader';
import Info from '@/components/FAQ/Info';

export default function FAQPage() {
  return (
    <Default>
      {/* Page Metadata */}
      <Head>
        <title>Varma - FAQ</title>
        <meta name="description" content="Varma - is the heart and science of medicate test, est in 2015, varma specialise in providing medical accessories and health care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Page Components */}
      <AltHeader pageTitle='Frequency Asked Questions' />
      <Info />
    </Default>
  )
}
