import React from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav
      id="header"
      className="flex items-center justify-between flex-wrap md:px-40 px-6 py-6 relative "
    >
      <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
        <span className="font-semibold text-xl tracking-tight hover:text-green-800">
          <a href="/" rel="noreferrer">
            <img
              className="md:w-full w-[89px] md:h-10 md:fill-current text-primary-white"
              alt="noReferer"
              src="https://serifcolakel.vercel.app/logo.png"
            />
          </a>
        </span>
      </div>

      <div className="block lg:hidden" onClick={() => setShowMenu(!showMenu)}>
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0 md:text-right">
        <div className="text-sm lg:flex-grow">
          <a
            href="/create"
            className="block mt-1 lg:inline-block lg:mt-0 text-xl text-dark-200 hover:text-teal-800 mr-4"
          >
            Create Resume
          </a>
          <a
            href="/serifcolakel"
            className="block mt-4 lg:inline-block lg:mt-0 text-xl text-dark-200 hover:text-teal-800 mr-4"
          >
            Serif Resume
          </a>
          <a
            href="#footer"
            className="block mt-4 lg:inline-block lg:mt-0  text-xl text-dark-200 hover:text-teal-800 mr-4"
          >
            Contact
          </a>
        </div>
      </div>
      {showMenu && (
        <div className="w-[50%] absolute z-50 rounded-lg text-white top-16 right-6 py-4 bg-blue-400">
          <a
            href="/create"
            className="block mt-1 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4"
          >
            Create Resume
          </a>
          <a
            href="/serifcolakel"
            className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4"
          >
            Serif Resume
          </a>
          <a
            href="#footer"
            className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
