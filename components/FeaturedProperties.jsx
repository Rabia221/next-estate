import Image from "next/image";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Family House",
      count: "122 Property",
      img: "https://funny-daffodil-350bc9.netlify.app/images/hero/h1.png",
    },
    {
      id: 2,
      title: "Apartment",
      count: "80 Property",
      img: "https://funny-daffodil-350bc9.netlify.app/images/hero/h2.png",
    },
    {
      id: 3,
      title: "Villa",
      count: "45 Property",
      img: "https://funny-daffodil-350bc9.netlify.app/images/hero/h3.png",
    },
    {
      id: 4,
      title: "Office",
      count: "64 Property",
      img: "https://funny-daffodil-350bc9.netlify.app/images/hero/h4.png",
    },
    {
      id: 5,
      title: "Studio",
      count: "38 Property",
      img: "https://funny-daffodil-350bc9.netlify.app/images/hero/h6.png",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
      gap-6 max-w-5xl w-full mx-auto font-montserrat pt-8">
        {properties.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center rounded-lg shadow-lg p-4 h-[170px] hover:shadow-xl transition bg-[#f7f9fc]"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={60}
              height={60}
              unoptimized
              className="mt-4"
            />
            <h3 className="text-sm md:text-base mt-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">{item.count}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProperties;
