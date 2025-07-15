import DynamicHeroSection from '@/components/DynamicHeroSection'

const page = () => {
  return (
    <>
       <div className=' bg-white'>
      <DynamicHeroSection img="	https://funny-daffodil-350bc9.netlify.app/static/media/pricing.4552ccf3b91e93029513.jpg"
       title="About Us" subTitle="About Us - Who We Are?" />
   <div className="bg-gray-100 py-16 px-4 flex justify-center">
  <div className="w-full max-w-4xl bg-white p-10 rounded-xl shadow-lg">
    <h5 className='text-sm font-semibold p-2'>Fillup The Form</h5>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        className="w-full max-w-[400px] px-4 py-3 rounded-md border 
         border-gray-300 placeholder-black placeholder:text-xs
         focus:outline-none focus:ring-0 focus:border-gray-300"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-[400px] px-4 py-3 rounded-md border
         border-gray-300 placeholder-black placeholder:text-xs text-base
         focus:outline-none focus:ring-0 focus:border-gray-300"
      />

      {/* Subject */}
      <input
        type="text"
        placeholder="Subject"
        className="w-full md:col-span-2 px-4 py-3 rounded-md border
         border-gray-300 placeholder-black placeholder:text-sm text-base
         focus:outline-none focus:ring-0 focus:border-gray-300"
      />

      {/* Message */}
      <textarea
        rows="5"
        placeholder="Message"
        className="w-full md:col-span-2 px-4 py-3 rounded-md border
         border-gray-300 placeholder-black placeholder:text-sm text-base resize-none
         focus:outline-none focus:ring-0 focus:border-gray-300"
      ></textarea>

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-start text-sm">
        <button
          type="submit"
          className="bg-[#27ae60] hover:bg-green-700 text-white
           font-semibold px-10 py-3 rounded-md transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  

    </div>
    </>
  )
}

export default page
