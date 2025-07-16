import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import RecentProperties from "@/components/RecentProperties";
import AwardsSection from "@/components/AwardsSection";
import ExploreByLocation from "@/components/ExploreByLocation";
import FeaturedAgents from "@/components/FeaturedAgents";
import PackagePlans from "@/components/PackagePlans";

const page = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      {/* Featured Property Types */}
      <section
        className="w-full min-h-[50vh] px-4 py-10 text-center flex flex-col items-center"
        style={{ backgroundColor: "#f7f9fc" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Featured Property Types
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Find All Types of Property.
        </p>
        <FeaturedProperties />
      </section>

      {/* Recent Properties */}
      <section className="w-full px-4 py-10 bg-white flex flex-col items-center">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-3xl md:text-4xl pt-7 font-bold text-gray-800">
            Recent Properties Listed
          </h2>
          <p className="text-gray-500 text-sm mt-2 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod <br></br>tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <RecentProperties />
      </section>

      {/* Awards, Explore & Agents */}
      <AwardsSection />
      <ExploreByLocation />
      <FeaturedAgents />

      {/* Pricing / Plans */}
      <section className=" px-4 py-12 text-center">
        <h2 className="text-5xl font-bold  pb-3 text-[#2d3954]">
          Select Your Package
        </h2>
        <p className="text-sm mb-8  text-[#72809d] ">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium<br></br>
          voluptatum deleniti atque corrupti quos dolores{" "}
        </p>

        <PackagePlans />
      </section>
    </div>
  );
};

export default page;
