import React from 'react';
import logo from '../../assets/images/logo-small.svg';

function SreHeader() {
  return (
    <div className="backdrop-blur-sm relative sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10"
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="Logo of the application"
              />
              <span className="text-2xl text-purple-600 font-bold">
                Simple React App
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

SreHeader.propTypes = {

};

export default SreHeader;
