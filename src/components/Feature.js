import React from "react";

export default function Feature() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Serif Colakel expresses
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full h-auto md:w-1/3 px-2 mb-4">
            <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                How are you feeling, kid? You don't look so bad to me. In fact,
                you look strong enough to pull the ears off a Gundark. Thanks to
                you.
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">
                Luke Skywalker
              </p>
            </div>
          </div>

          <div className="w-full h-auto md:w-1/3 px-2 mb-4">
            <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                That's two you owe me, junior. Well your Worship, looks like you
                managed to keep me around for a little while longer. I had
                nothing to do with it.
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">
                Emperor's Royal Guards
              </p>
            </div>
          </div>

          <div className="w-full h-auto md:w-1/3 px-2 mb-4">
            <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">
                General Rieekan thinks it's dangerous for any ships to leave the
                system until we've activated the energy shield. That's a good
                story. I think you just can't bear to let a gorgeous guy like me
                out of your sight
              </p>
              <p className="text-gray-500 text-xs md:text-sm px-6">
                Queen Mother Ta'a Chume
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
