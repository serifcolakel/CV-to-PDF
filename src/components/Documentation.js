import React from "react";
import { BsFillPinFill } from "react-icons/bs";
import { documentation } from "./data";
export default function Documentation() {
  return (
    <section className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Documentation
      </h2>
      {documentation.map((item, idx) => (
        <div key={idx}>
          {idx % 2 === 0 ? (
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 pr-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  {item.title}
                </h4>
                {item.description.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 mb-8 flex flex-row gap-x-4 items-center"
                  >
                    <BsFillPinFill
                      className="text-red-500 rotate-45"
                      size={30}
                    />
                    {item.title}
                  </p>
                ))}
              </div>
              <div className="w-full md:w-1/2">
                <img
                  className="rounded-lg hover:scale-125 cursor-pointer"
                  src={item.image}
                  alt="Profile"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center md:flex-row flex-col-reverse md:gap-x-20 mb-20">
              <div className="w-full md:w-1/2">
                <img
                  className="rounded-lg hover:scale-125 cursor-pointer"
                  src={item.image}
                  alt="use the force"
                />
              </div>
              <div className="w-full  md:w-1/2 md:pl-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">
                  {item.title}
                </h4>
                {item.description.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 mb-8 flex flex-row gap-x-4 items-center"
                  >
                    <BsFillPinFill
                      className="text-red-500 rotate-45"
                      size={30}
                    />
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
