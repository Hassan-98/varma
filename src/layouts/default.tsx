import React from 'react';
//= Components
import PreLoader from '@/components/Common/Loader';
import Topbar from '@/components/Common/TopBar';
import Navbar from '@/components/Common/Navbar';
import Footer from '@/components/Common/Footer';

interface IProps {
  children: React.ReactNode;
}

function Default({ children }: IProps) {
  return (
    <>
      <PreLoader />
      <Topbar />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Default