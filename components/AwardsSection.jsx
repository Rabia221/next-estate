import { FaTrophy, FaHeart, FaLightbulb } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      icon: <FaTrophy size={28} className="text-white" />,
      number: "32 M",
      label: "Blue Burmin Award",
    },
    {
      id: 2,
      icon: <FaBagShopping size={28} className="text-white" />,
      number: "43 M",
      label: "Happy Users",
    },
    {
      id: 3,
      icon: <FaLightbulb size={28} className="text-white" />,
      number: "51 M",
      label: "Customer Satisfaction",
    },
    {
      id: 4,
      icon: <FaHeart size={28} className="text-white" />,
      number: "42 M",
      label: "Trusted Partners",
    },
  ];

  return (
    <div className="bg-[#122947] min-h-[505px] text-white 
    py-12 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full flex mx-auto flex-col items-center justify-center mb-10">
        <h2 className="text-base mb-1 text-[#27ae60] ">Our Awards</h2>
        <p className="text-2xl text-center pb-9">
          Over 1,24,000+ Happy User Being With Us Still<br></br> They Love Our Services
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
        {awards.map((award) => (
          <div
            key={award.id}
            className="flex flex-col items-center text-center p-6 text-6xl transition"
          >
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-[#ffffff1a] rounded-[0_50%_0_50%] flex items-center justify-center">
                <span>{award.icon}</span>
              </div>
            </div>
            <p className="text-4xl mb-1 font-extrabold">{award.number}</p>
            <p className="text-sm text-gray-500">{award.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
