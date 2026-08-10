import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, Suspense } from 'react';

function GAListenerContent() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-GEP8VCBFXE', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GAListener() {
  return (
    <Suspense fallback={null}>
      <GAListenerContent />
    </Suspense>
  );
}
