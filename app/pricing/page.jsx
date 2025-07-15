import DynamicHeroSection from '@/components/DynamicHeroSection'
import PackagePlans from '@/components/PackagePlans'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-white'>
        <DynamicHeroSection img="https://funny-daffodil-350bc9.netlify.app/static/media/pricing.4552ccf3b91e93029513.jpg" title="30 days money back guarantee" subTitle="No Extra Fees. Friendly Support" />
        <div className="py-12 flex items-center justify-center">
          <PackagePlans/>
        </div>
      </div>
  )
}

export default page
