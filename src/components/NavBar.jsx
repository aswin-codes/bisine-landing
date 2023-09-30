import { useState } from "react";
import Logo from "../assets/Logo.png";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggling Menu");
    setIsOpen(!isOpen);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="fixed z-50  ">
      <div
        className={` w-screen flex lg:pl-4 pr-1 pl-1 lg:pr-40 py-3 justify-between items-center  ${
          isOpen ? "backdrop-blur-md" : "backdrop-blur-none"
        }`}
      >
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="object-contain lg:h-10 h-8 drop-shadow-lg"
          />
        </div>
        <div className="lg:flex gap-10 items-center hidden text-lg ">
          <p onClick={() => scrollToSection("home")} className="cursor-pointer">
            Home
          </p>
          <p
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            About Us
          </p>
          <p
            onClick={() => scrollToSection("sampleui")}
            className="cursor-pointer"
          >
            Sample UI
          </p>
          <p
            onClick={() => scrollToSection("pricing")}
            className="cursor-pointer"
          >
            Pricing
          </p>
          <div
            onClick={() => scrollToSection("contact")}
            className="text-sky-400 bg-white px-4 py-2 rounded-full shadow-xl cursor-pointer"
          >
            <p>Contact us</p>
          </div>
        </div>
        <div onClick={() => toggleMenu()} className="lg:hidden">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        onClick={() => toggleMenu()}
        className={`flex flex-col flex-1 h-screen  transition-all  duration-300 ease-in-out overflow-hidden backdrop-blur-md lg:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className={`bg-activebrown   backdrop-opacity-5  `}>
          <ul className="flex-col  text-white gap-10 text-center text-4xl ">
            <li onClick={() => scrollToSection("home")} className="px-4 py-2 ">
              <p className="p-2 rounded-md ">Home</p>
            </li>
            <li onClick={() => scrollToSection("about")} className="px-4 py-2 ">
              <p className="p-2 rounded-md ">About Us</p>
            </li>
            <li
              onClick={() => scrollToSection("sampleui")}
              className="px-4 py-2 "
            >
              <p className="p-2 rounded-md ">Sample UI</p>
            </li>
            <li
              onClick={() => scrollToSection("pricing")}
              className="px-4 py-2 "
            >
              <p className="p-2 rounded-md ">Pricing</p>
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 "
            >
              <p className="p-2 rounded-md ">Contact US</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;