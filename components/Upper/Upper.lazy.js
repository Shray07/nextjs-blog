import React, { lazy, Suspense } from 'react';

const LazyUpper = lazy(() => import('./Upper'));

const Upper = props => (
  <Suspense fallback={null}>
    <LazyUpper {...props} />
  </Suspense>
);

export default Upper;
