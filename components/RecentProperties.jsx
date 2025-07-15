import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const RecentProperties = () => {
  const properties = [
    {
      id: 1,
      item: "$3,700",
      title: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      type: "Apartment",
      status: "For Rent",
      img: "https://funny-daffodil-350bc9.netlify.app/images/list/p-1.png",
    },
    {
      id: 2,
      item: "$9,750",
      title: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      type: "Condos",
      status: "For Sale",
      img: "https://funny-daffodil-350bc9.netlify.app/images/list/p-2.png",
    },
    {
      id: 3,
      item: "$5,860",
      title: "Downtown Apartment",
      location: "5624 Mooker Market, USA",
      type: "Offices",
      status: "For Rent",
      img: "https://funny-daffodil-350bc9.netlify.app/images/list/p-7.png",
    },
    {
      id: 4,
      item: "$7,540",
      title: "Herringbone Realty",
      location: "350 Bay Street, Canada",
      type: "Homes & Villas",
      status: "For Sale",
      img: "https://funny-daffodil-350bc9.netlify.app/images/list/p-4.png",
    },
    {
      id: 5,
      item: "$4,850",
      title: "350 Bay Street, Canada",
      location: "5621 Liverpool, London",
      type: "Commercial",
      status: "For Sale",
      img: "https://funny-daffodil-350bc9.netlify.app/images/list/p-5.png",
    },
    {
      id: 6,
      item: "$2,742",
      title: "Riverside House",
      location: "210 Zirak Road, Canada",
      type: "Apartment",
      status: "For Sale",
      img: "https://funny-daffodil-350bc9.netlify.app/images/list/p-6.png",
    },
  ];

  return (
    <>
      <div className="max-w-5xl w-full grid grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded overflow-hidden w-full flex flex-col"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={100}
              height={200}
              className="w-full h-[240px] object-cover"
              unoptimized
            />

            <div className="flex justify-between items-center px-4 py-4 mt-4">
              <span
                className={`text-xs font-medium px-2 py-1 rounded ${item.status === "For Sale"
                    ? "text-[#25B579] bg-[#25B5791A]"
                    : "text-[#FF9800] bg-[#FF98001A]"
                  }`}
              >
                {item.status}
              </span>
              <FaHeart className="text-[#bec7d8] text-[18px] cursor-pointer" />
            </div>

            <h3 className="text-xs font-semibold px-5 leading-tight">
              {item.title}
            </h3>

            <p className="flex items-center text-sm text-[#72809d] px-4 pb-7 mt-1 mb-3">
              <FaMapMarkerAlt className="mr-1 text-[#72809d] text-base" />
              {item.location}
            </p>

            <hr className="text-gray-300 mt-2 mb-3" />

            <div className="flex justify-between items-center px-4  py-4 pb-4">
              <div>
                <button className="bg-[#27ae60] text-white text-base font-semibold px-6 py-2 rounded-full">
                  {item.item}
                </button>
                <span className="text-sm text-gray-600 ml-2">/sqft</span>
              </div>
              <span className="text-sm text-gray-800 font-medium">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentProperties;
