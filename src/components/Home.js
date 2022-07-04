import React from "react";
import Documentation from "./Documentation";
import Feature from "./Feature";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <div className="text-gray-700 bg-white antialiased">
        <Navbar />
        <div className="py-20 bg-cover bg-no-repeat bg-fixed bg-revenue-card-bg">
          <div className="container m-auto text-center px-6 opacity-100">
            <h2 className="text-4xl font-bold mb-2 text-blue-600">
              Create your resume in seconds
            </h2>
            <h3 className="text-2xl mb-8 text-gray-500">
              You can print out your resume by filling out the sections for the
              relevant design in a short time without any login process.
            </h3>
            <a
              href="/serifcolakel"
              className="bg-white font-bold rounded-full py-4 px-8 md:w-[50%] mx-auto text-center shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800"
            >
              If you think it's an amazing idea, let's go to the sample design.
            </a>
          </div>
        </div>
        <Documentation />
        <Feature />
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
        <Footer />
      </div>
    </div>
  );
}
