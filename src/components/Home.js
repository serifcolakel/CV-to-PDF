import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const link = [
  {
    link: "https://www.facebook.com/Srf247/",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.instagram.com/serifcolakell/?hl=tr",
    icon: <FaInstagram />,
  },
  {
    link: "https://twitter.com/ColakelSerif",
    icon: <FaTwitter />,
  },

  {
    link: "https://www.linkedin.com/in/serifcolakel/",
    icon: <FaLinkedin />,
  },

  {
    link: "https://github.com/serifcolakel",
    icon: <FaGithub />,
  },

  {
    link: "mailto:serifcolakel0@gmail.com",
    icon: <GrMail />,
  },
];
export default function Home() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div>
      <div className="text-gray-700 bg-white antialiased">
        <nav className="flex items-center justify-between flex-wrap p-6 relative">
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

          <div
            className="block lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
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

        <div className="py-20 bg-cover bg-no-repeat bg-fixed bg-revenue-card-bg">
          <div className="container m-auto text-center px-6 opacity-100">
            <h2 className="text-4xl font-bold mb-2 text-blue-600">
              Echo Base...I've got something!
            </h2>
            <h3 className="text-2xl mb-8 text-gray-500">
              Not much, but it could be a life form. This is Rouge Two. this is
              Rouge Two. Captain Solo, so you elit?
            </h3>
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800">
              Commander Skywalker, do you want to do?
            </button>
          </div>
        </div>
        <section className="container mx-auto px-6 p-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Serif Colakel!
          </h2>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Vortex</h4>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                className="rounded-lg"
                src="https://pbs.twimg.com/media/CR45LOXVEAADG5E.jpg"
                alt="Vortex"
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <img
                className="rounded-lg"
                src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg"
                alt="use the force"
              />
            </div>
            <div className="w-full md:w-1/2 pl-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Use the Force!
              </h4>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Life creates it
              </h4>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                className="rounded-lg"
                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg"
                alt="Syncing"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Serif Colakel expresses
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    How are you feeling, kid? You don't look so bad to me. In
                    fact, you look strong enough to pull the ears off a Gundark.
                    Thanks to you.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Luke Skywalker
                  </p>
                </div>
              </div>

              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    That's two you owe me, junior. Well your Worship, looks like
                    you managed to keep me around for a little while longer. I
                    had nothing to do with it.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Emperor's Royal Guards
                  </p>
                </div>
              </div>

              <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    General Rieekan thinks it's dangerous for any ships to leave
                    the system until we've activated the energy shield. That's a
                    good story. I think you just can't bear to let a gorgeous
                    guy like me out of your sight
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Queen Mother Ta'a Chume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-6 text-center py-20 bg-[#667eea]">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Headquarters personnel
            </h2>
            <h3 className="my-4 text-2xl text-white">
              Report to command center. Take it easy.
            </h3>
            <a
              href="https://serifcolakel.vercel.app/#contactme"
              className="bg-white font-bold rounded-full mt-6 py-4 px-8 md:w-[20%] w-[70%] flex justify-center mx-auto shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600"
            >
              Contact Me
            </a>
          </div>
        </section>

        <footer id="footer" className="bg-gray-100">
          <>
            <div
              id="footer"
              className="bg-brand-color p-4 md:p-8 md:flex flex-col md:gap-y-2 gap-y-4 z-0"
            >
              <div className="flex flex-row items-end justify-end md:p-2">
                <a
                  href="#header"
                  className="flex flex-col  rounded-full animate-bounce"
                >
                  <img
                    className="animate-bounce-slow "
                    alt="Serif Colakel"
                    src="https://img.icons8.com/color/48/000000/double-up--v2.png"
                  />
                </a>
              </div>
              <div className="flex  flex-col justify-center items-center md:items-center gap-y-8 md:justify-center md:w-[1130px]  md:pt-12 p-2 mx-auto  text-primary-white ">
                <div className="flex items-center flex-row gap-x-2 md:scale-150">
                  {link.map((x, i) => (
                    <a
                      href={x.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="scale-150 hover:text-image-color-1 "
                      key={i}
                    >
                      {x.icon}
                    </a>
                  ))}
                </div>

                <p className="flex text-center">
                  <strong className="text-image-color-1 ">
                    @2021 Serif Colakel,
                  </strong>
                  {"  "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </>
        </footer>
      </div>
    </div>
  );
}
