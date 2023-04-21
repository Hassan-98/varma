import Head from 'next/head';
//= Layout
import Default from '@/layouts/default';
//= Page Components
import AltHeader from '@/components/Common/AltHeader';
import NotFound from '@/components/Common/NotFound';

export default function NotFoundPage() {
  return (
    <Default>
      {/* Page Metadata */}
      <Head>
        <title>Varma - Not Found</title>
        <meta name="description" content="Varma Pharmacy - is the heart and science of medicate test, est in 2015" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Page Components */}
      <AltHeader pageTitle='Are you lost ?' />
      <NotFound />
    </Default>
  )
}
