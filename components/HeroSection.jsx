import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage:
          "url('https://funny-daffodil-350bc9.netlify.app/static/media/banner.1a3c8a0a448e8e24f6a0.png')",
      }}
    >

      {/* Hero Text */}
      <div className="relative z-10 text-center text-white ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Search Your Next Home</h1>
        <p className="text-sm pt-2 text-gray-300 pb-10">Find new & featured property 
          located in your local city.</p>
      </div>
      {/* Search Inputs */}
  <div className="relative z-10 mt-10 bg-white p-5 rounded-lg 
shadow-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4">

  {/* Input 1 */}
  <div className="flex flex-col w-full border-r pr-4 border-gray-300 gap-1">
    <label className="text-gray-700 text-sm font-medium">City/Street</label>
    <input
      type="text"
      placeholder="Location"
      className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>

  {/* Input 2 */}
  <div className="flex flex-col w-full border-r pr-4 border-gray-300 gap-1">
    <label className="text-gray-700 text-sm font-medium">Property Type</label>
    <input
      type="text"
      placeholder="Property Type"
      className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>

  {/* Input 3 */}
  <div className="flex flex-col w-full border-r pr-4 border-gray-300 gap-1">
    <label className="text-gray-700 text-sm font-medium">Price Range</label>
    <input
      type="text"
      placeholder="Price Range"
      className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>

  {/* Search Button */}
  <div className="flex items-end gap-2">
    <p className="text-sm text-black">Advance Filter</p>
    <button className="bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition duration-300">
      <FaSearch />
    </button>
  </div>
</div>

    </section>
  );
};

export default HeroSection;
