import DynamicHeroSection from '@/components/DynamicHeroSection'
import RecentProperties from '@/components/RecentProperties'
import React from 'react'

const page = () => {
    return (
        <>
            <div className=' bg-white'>
                <DynamicHeroSection img="https://funny-daffodil-350bc9.netlify.app/static/media/about.56e92b20e762df2fa5de.jpg" title="About Us" subTitle="About Us - Who We Are?" />

                <div className='flex items-center justify-center py-12'>
                    <RecentProperties />
                </div>
            </div>
        </>
    )
}

export default page
