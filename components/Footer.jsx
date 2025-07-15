import React from "react";

const Footer = () => {
  return (
    <footer>
     
      <div className="bg-[#1d2636] text-white p-10 ">
        <div className="md:px-20 mx-2">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 m-6 w-full max-w-screen-2xl py-4 mx-auto">
          <div className="md:col-span-3">
            <img
              src="https://funny-daffodil-350bc9.netlify.app/images/logo-light.png"
              alt="Logo"
              width={150}
              height={40}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold py-3">Stay Updated</h3>
            <p className="text-sm text-[#808080] py-2">
              Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 w-full placeholder-black rounded-l-md text-black bg-white text-sm outline-none"
              />
              <button className="bg-[#27ae60] px-4 py-2 rounded-r-md text-white text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Navigation Links - 3 columns */}
          <div>
            <h4 className="font-semibold mb-4 text-center">LAYOUTS</h4>
            <ul className="space-y-4 py-2 flex flex-col gap-4 text-sm text-center text-[#808080]">
              <li>Home Page</li>
              <li>About Page</li>
              <li>Service Page</li>
              <li>Property Page</li>
              <li>Contact Page</li>
              <li>Single Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-center mb-4">ALL SECTIONS</h4>
            <ul className="space-y-4 flex flex-col text-center gap-4 text-sm text-[#808080]">
              <li>Headers</li>
              <li>Features</li>
              <li>Attractive</li>
              <li>Testimonials</li>
              <li>Videos</li>
              <li>Footers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-center mb-4">COMPANY</h4>
            <ul className="space-y-4 flex flex-col gap-4 text-center  text-sm text-[#808080]">
              <li>About</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Affiliate</li>
              <li>Login</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
        </div>

        <hr className="border-t border-[#808080] w-full pt-2 opacity-30" />
        <p className="text-center p-7 text-sm text-[#808080]">© 2021 RentUP. Designed By GorkCoder.</p>
      </div>
    </footer>
  );
};

export default Footer;