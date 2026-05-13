import React, { Suspense } from 'react'
import DigitalPaajiHero from './DigitalPaajiHero'

const page = () => {
  return (
    <div>
        <Suspense fallback="">

<DigitalPaajiHero />
        </Suspense>


    </div>
  )
}

export default page