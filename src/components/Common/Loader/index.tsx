import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function PreLoader() {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener('load', hanldeHideLoader);
    router.events.on("routeChangeComplete", hanldeHideLoader);
  }, [router, router.asPath]);

  function hanldeHideLoader() {
    const loader = document.querySelector<HTMLDivElement>('.preloader')!;
    loader.classList.add('fade');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000);
  }

  return (
    <div className="preloader">
      <span className="loader"></span>
    </div>
  )
}

export default PreLoader