import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const PackagePlans = () => {
  const data = [
    {
      id: 1,
      name: "Basic",
      price: "$29",
      desc: "per user, per month",
      plans: [
        { active: true, text: "99.5% Uptime Guarantee" },
        { active: true, text: "120GB CDN Bandwidth" },
        { active: true, text: "5GB Cloud Storage" },
        { active: false, text: "Personal Help Support" },
        { active: false, text: "Enterprise SLA" },
      ],
      btn: { text: "Start Basic", bg: "transparent" },
    },
    {
      id: 2,
      topBtn: "Best Value",
      name: "Standard",
      price: "$49",
      desc: "per user, per month",
      plans: [
        { active: true, text: "99.5% Uptime Guarantee" },
        { active: true, text: "150GB CDN Bandwidth" },
        { active: true, text: "10GB Cloud Storage" },
        { active: true, text: "Personal Help Support" },
        { active: false, text: "Enterprise SLA" },
      ],
      btn: { text: "Start Standard", bg: "bg-green-500" },
    },
    {
      id: 3,
      name: "Premium",
      price: "$99",
      desc: "per user, per month",
      plans: [
        { active: true, text: "99.5% Uptime Guarantee" },
        { active: true, text: "200GB CDN Bandwidth" },
        { active: true, text: "20GB Cloud Storage" },
        { active: true, text: "Personal Help Support" },
        { active: true, text: "Enterprise SLA" },
      ],
      btn: { text: "Start Premium", bg: "transparent" },
    },
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl items-center justify-center mx-auto">
        {data.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-lg shadow-lg overflow-hidden 
              ${plan.id === 2 ? "h-[600px] " : "h-[550px]"} 
              bg-white transform transition-all duration-300 hover:scale-105`}
          >
            {/* Top button for "Best Value" */}
            {plan.topBtn && (
              <div className="flex mx-auto items-center justify-center pt-4">
                <div className="bg-orange-500 text-white px-4 py-1 w-fit text-sm font-bold rounded-full">
                  {plan.topBtn}
                </div>
              </div>
            )}

            <div className="p-6">
              <div className="flex flex-col mx-auto items-center justify-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {plan.name}
                </h2>
                <p className="text-4xl font-bold text-gray-900 mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
              </div>
              <ul className="space-y-6 mb-8">
                {plan.plans.map((item, index) => (
                  <li key={index} className="flex items-start py-1 gap-2">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full mr-3 
                      ${
                        item.active
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.active ? (
                        <FaCheck size={12} />
                      ) : (
                        <FaTimes size={12} />
                      )}
                    </span>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-full  border-4 
  ${
    plan.btn.bg === "bg-green-500"
      ? "bg-[#27ae60]   text-white"
      : "text-[#27ae60] border-[#27ae601f]"
  }
  transition-colors duration-300`}
              >
                {plan.btn.text}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePlans;
