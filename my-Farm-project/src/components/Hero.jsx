import React from "react";

function Hero() {
  return (
    <section
      className="bg-[url('/farm.jpeg')] bg-cover bg-center bg-no-repeat h-[70vh] relative flex items-center justify-center text-white"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>

      {/* Hero Content */}
      <div className="text-center absolute top-10 left-10 z-10">
        <h1 className="text-4xl md:text-5xl font-bold ">
          Fresh from Farm to Table
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Connect directly with local farmers and discover the freshest produce,
          organic goods, and artisanal products in your community.
        </p>

        {/* Bullet Points */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            100% Local Farmers
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            Organic & Fresh
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            Direct from Source
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
