import React, {lazy, Suspense} from 'react'
import Loading from '@/components/Loading/Loading'

const lazyLoading = (loader) => {
  const LazyComponent = lazy(loader)
  return <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
}

export default lazyLoading
