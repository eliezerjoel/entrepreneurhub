import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            AFFILIATES
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mr-5 text-xl mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              BUGEMA UNIVERSITY
            </a>
            <a
              href="#"
              className="mr-5 text-xl mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              CLYCITES
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">
          &copy; 2024 EntHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer