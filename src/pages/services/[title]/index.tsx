import Head from 'next/head';
//= Layout
import Default from '@/layouts/default';
//= Data
import servicesData from '@/components/Home/Services/data.json';
//= Page Components
import AltHeader from '@/components/Common/AltHeader';
import Service from '@/components/Services/Service';


export default function ServicePage({ title }: { title: string; }) {
  return (
    <Default>
      {/* Page Metadata */}
      <Head>
        <title>Varma - {title}</title>
        <meta name="description" content="Varma - is the heart and science of medicate test, est in 2015, varma specialise in providing medical accessories and health care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Page Components */}
      <AltHeader pageTitle={title} />
      <Service title={title} />
    </Default>
  )
}

export function getStaticPaths() {
  const servicesPaths = servicesData.map(service => ({ params: { title: service.title.toLowerCase() } }));

  return {
    paths: servicesPaths,
    fallback: false
  }
}

export function getStaticProps({ params }: { params: { title: string; } }) {
  const services = servicesData.map(service => service.title.toLowerCase());

  if (services.indexOf(params.title) === -1) return {
    redirect: {
      permanent: true,
      destination: `/404`
    }
  };
  else return {
    props: { title: params.title.toLowerCase() }
  }
}