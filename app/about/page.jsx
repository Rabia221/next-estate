import DynamicHeroSection from '@/components/DynamicHeroSection';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <DynamicHeroSection
        img="https://funny-daffodil-350bc9.netlify.app/static/media/about.56e92b20e762df2fa5de.jpg"
        title="About Us"
        subTitle="About Us - Who We Are?"
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left pl-14" >
          <h3 className="text-3xl font-bold mb-4 pb-2">Our Agency Story</h3>
          <p className="text-sm text-justify pb-4 text-gray-700">
            <span className="block text-xs text-[#72809d] font-semibold pb-6">
              Check out our company story and work process
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <div className="mt-6">
            <button className="bg-[#27ae60] text-white px-6 py-4 font-semibold rounded-full hover:bg-[#0f3a60] transition duration-300">
              More About Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://funny-daffodil-350bc9.netlify.app/immio.jpg"
            alt="About"
            className="w-full object-cover shadow-lg max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
