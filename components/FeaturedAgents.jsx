import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { TiTick } from "react-icons/ti";

const FeaturedAgents = () => {
  const data = [
    {
      id: 1,
      btn: "Top Agent",
      userImage:
        "https://funny-daffodil-350bc9.netlify.app/images/customer/team-1.jpg",
      location: "Liverpool, Canada",
      userName: "John Dew",
    },
    {
      id: 2,
      btn: "Top Agent",
      userImage:
        "https://funny-daffodil-350bc9.netlify.app/images/customer/team-2.jpg",
      location: "Montreal, Canada",
      userName: "Harijeet M. Siller",
    },
    {
      id: 3,
      btn: "Top Agent",
      userImage:
        "https://funny-daffodil-350bc9.netlify.app/images/customer/team-3.jpg",
      location: "Denever, USA",
      userName: "Anna K. Young",
    },
    {
      id: 4,
      btn: "Top Agent",
      userImage:
        "https://funny-daffodil-350bc9.netlify.app/images/customer/team-4.jpg",
      location: "2272 Briarwood Drive",
      userName: "Michael P. Grimaldo",
    },
    {
      id: 5,
      btn: "Top Agent",
      userImage:
        "https://funny-daffodil-350bc9.netlify.app/images/customer/team-5.jpg",
      location: "2272 Briarwood Drive",
      userName: "Michael P. Grimaldo",
    },
    {
      id: 6,
      btn: "Top Agent",
      userImage:
        "https://funny-daffodil-350bc9.netlify.app/images/customer/team-5.jpg",
      location: "Montreal, USA",
      userName: "Montreal, USA",
    },
  ];

  return (
    <div className="w-full px-4 py-12 text-center flex flex-col items-center bg-[#f7f9fc]">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Our Featured Agents{" "}
      </h2>
      <p className="text-gray-500  text-xs mt-1 pb-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore <br></br>et dolore magna aliqua. Ut enim ad
        minim veniam.
      </p>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl  
            w-full mx-auto ">
        {data.map((agent) => (
          <div
            key={agent.id}
            className="bg-white p-7 shadow-md rounded-lg relative  transition hover:shadow-xl"
          >
            <div
              className="absolute top-6 left-4 bg-[#ff6922] text-white text-xs 
            px-5 py-3 rounded-full z-10"
            >
              {agent.btn}
            </div>

            <div className="relative w-full flex justify-center pt-7">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-4  border-gray-300"></div>

                {/* Profile Image */}
                <img
                  src={agent.userImage}
                  alt={agent.userName}
                  className="w-17 h-17 rounded-full object-cover z-10"
                />

                <div
                  className="absolute top-1/2 right-2 -translate-y-1/2 w-4 h-4 
                bg-[#108be7] rounded-full border-2 border-white flex items-center 
                justify-center z-20"
                >
                  <TiTick className="text-white text-[10px]" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-600 text-sm">
              <FaMapMarkerAlt className="text-gray-500" />
              <span>{agent.location}</span>
            </div>

            {/* Name */}
            <h3 className="text-[13px] font-semibold text-gray-800 mt-1">
              {agent.userName}
            </h3>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 py-3">
              <span className="bg-gray-200 p-2 rounded-full text-xs text-gray-500">
                <FaFacebookF />
              </span>
              <span className="bg-gray-200 p-2 rounded-full text-xs text-gray-500">
                <FaLinkedinIn />
              </span>
              <span className="bg-gray-200 p-2 rounded-full text-xs text-gray-500">
                <FaTwitter />
              </span>
              <span className="bg-gray-200 p-2 rounded-full text-xs text-gray-500">
                <FaInstagram />
              </span>
            </div>

            <div className="flex justify-between items-center pt-3">
              <button className="flex items-center gap-1 bg-[#27ae60] text-white px-3 py-3 rounded text-xs">
                <MdEmail className="text-lg " />
                Message
              </button>
              <span className="bg-black text-white p-3 px-5 rounded-sm  text-base">
                <FaPhone />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgents;
