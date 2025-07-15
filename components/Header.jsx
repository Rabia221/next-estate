'use client'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white text-black sticky top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between md:px-20  px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <img
              src="https://funny-daffodil-350bc9.netlify.app/images/logo.png"
              alt="Logo"
              className="w-36"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-gray-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 rounded transition relative text-sm font-semibold flex items-center gap-2">
            <span className="bg-[#27ae60] text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>{" "}
            My List
          </button>

          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300 flex items-center gap-2">
            <FaArrowRightFromBracket />
            Sign In
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-green-700 text-white overflow-hidden transition-all 
      duration-300 ease-in-out ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col items-start px-14 gap-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-lg hover:text-gray-300 transition"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;