import DynamicHeroSection from '@/components/DynamicHeroSection'
import FeaturedProperties from '@/components/FeaturedProperties'

const page = () => {
  return (
    <>
      <div className=' bg-white'>
        <DynamicHeroSection img="https://funny-daffodil-350bc9.netlify.app/static/media/services.13be7fde05782bd5e2e8.jpg" title="Services" subTitle="Services -All Services" />
        <div className="py-12 flex items-center justify-center">
          <FeaturedProperties />
        </div>
      </div>
    </>
  )
}

export default page