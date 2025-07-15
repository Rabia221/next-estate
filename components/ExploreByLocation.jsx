import Image from "next/image";

const locations = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    info: "12 Villas · 07 Offices · 10 Apartments",
    img: "https://funny-daffodil-350bc9.netlify.app/images/location/city-1.png",
  },
  {
    id: 2,
    name: "New Orleans, Louisiana",
    info: "12 Villas · 07 Offices · 10 Apartments",
    img: "https://funny-daffodil-350bc9.netlify.app/images/location/city-2.png",
  },
  {
    id: 3,
    name: "New Orleans, Louisiana",
    info: "12 Villas · 07 Offices · 10 Apartments",
    img: "https://funny-daffodil-350bc9.netlify.app/images/location/city-3.png",
  },
  {
    id: 4,
    name: "New Orleans, Louisiana",
    info: "12 Villas · 07 Offices · 10 Apartments",
    img: "https://funny-daffodil-350bc9.netlify.app/images/location/city-4.png",
  },
  {
    id: 5,
    name: "New Orleans, Louisiana",
    info: "12 Villas · 07 Offices · 10 Apartments",
    img: "https://funny-daffodil-350bc9.netlify.app/images/location/city-5.png",
  },
  {
    id: 6,
    name: "New Orleans, Louisiana",
    info: "12 Villas · 07 Offices · 10 Apartments",
    img: "https://funny-daffodil-350bc9.netlify.app/images/location/city-6.png",
  },
];

const ExploreByLocation = () => {
  return (
    <div className="w-full py-12 px-4 text-center flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">
        Explore By Location
      </h2>
      <p className="text-gray-600 max-w-2xl  text-sm mx-auto pb-10 text-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>

      {/* Grid Wrapper */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full px-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="relative rounded-md overflow-hidden shadow-sm mx-auto h-[242px]"
            >
              {/* Image */}
              <Image
                src={loc.img}
                alt={loc.name}
                width={300}
                height={200}
                className="w-full h-[240px] object-cover"
                unoptimized
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(15,28,47,0.3)] bottom-4 top-4 right-4 left-4 text-white flex 
                flex-col justify-center z-index: -1 p-3">
                <h3 className="text-base font-semibold">{loc.name}</h3>
                <p className="text-xs">{loc.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreByLocation;
