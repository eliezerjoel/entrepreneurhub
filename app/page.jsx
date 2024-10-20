import React from "react";
import Hero from "../components/hero";

const EntHubHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      
    <Hero />

      {/* Project Categories */}
      <div className="container mx-auto mt-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Explore Our Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technology Projects */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            {/* <img
              src="/images/technology.jpg"
              alt="Technology Projects"
              className="w-full h-48 object-cover rounded-md"
            /> */}
            <h4 className="text-xl font-semibold mt-4">Technology Projects</h4>
            <p className="text-gray-600 mt-2">
              Explore innovative tech ideas by students.
            </p>
          </div>

          {/* Art & Design Projects */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            {/* <img
              src="/images/art-design.jpg"
              alt="Art & Design Projects"
              className="w-full h-48 object-cover rounded-md"
            /> */}
            <h4 className="text-xl font-semibold mt-4">Art & Design</h4>
            <p className="text-gray-600 mt-2">
              Dive into creative projects that inspire.
            </p>
          </div>

          {/* Social Impact Projects */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            {/* <img
              src="/images/social-impact.jpg"
              alt="Social Impact Projects"
              className="w-full h-48 object-cover rounded-md"
            /> */}
            <h4 className="text-xl font-semibold mt-4">Social Impact</h4>
            <p className="text-gray-600 mt-2">
              Discover projects making a difference.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default EntHubHome;
