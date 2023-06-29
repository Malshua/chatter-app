import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = function () {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Blogs", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="bg-blue-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center ">
            <a href="/" className="text-white">
              Bloggy
            </a>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {Links.map((link, index) => (
                <a
                  key={index}
                  className="text-md  rounded-md px-3 py-2 font-medium text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white"
                  href={link.link}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger menu */}
          <div className="mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">Open main Menu</span>
              {open === true ? <FaTimes className="h-8 w-8" /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile-menu */}
      {open ? (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {Links.map((link, index) => (
              <a
                key={index}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                href={link.link}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
