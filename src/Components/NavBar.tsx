import { FaBars, FaTimes } from "react-icons/fa";
import { GrAd } from "react-icons/gr";
import { useState } from "react";
import Button from "./Button";

const NavBar = function () {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/About" },
    { name: "Contact", link: "/Contact" },
    { name: "Blogs", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className=" bg-blue-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <div className="mr-2 text-gray-400">
              <GrAd />
            </div>

            <a href="/" className="text-2xl text-white">
              Bloggy
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Links.map((link, index) => (
                <a
                  key={index}
                  className="text-md  rounded-md px-3 py-2 font-medium text-gray-300 transition-all duration-500 hover:bg-blue-600 hover:text-white"
                  href={link.link}
                >
                  {link.name}
                </a>
              ))}
              <Button bgcolor="blue">Get Started</Button>
            </div>
          </div>
          {/* hamburger menu */}
          <div className="mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex  items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  focus:ring-offset-gray-800"
            >
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile-menu */}

      <div
        className={`absolute top-[66px] z-10  w-1/2 bg-blue-900  transition-all duration-500 ease-in-out md:hidden ${
          open ? "right-0 " : "right-[-490px]"
        }`}
      >
        <div className="items-center space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {Links.map((link, index) => (
            <a
              key={index}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              href={link.link}
            >
              {link.name}
            </a>
          ))}
          <Button bgcolor="blue">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
