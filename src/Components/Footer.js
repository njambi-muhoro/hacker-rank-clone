import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">

      <div className=" w-full lg:w-6xl mx-auto px-4 text-center">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full">
            <h4 className="text-3xl text-white font-semibold text-center">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
          </div>
          <div className=" w-full px-8 text-center">
            <ul className="flex flex-wrap list-none pl-0 mb-0 justify-center text-center">
              <li className="nav-item">
                <a
                  href="!#"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <FaTwitterSquare size ={20} className="mr-5" />
                  <span>Twitter</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="!#"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <FaFacebookSquare size ={20} className="mr-5" />
                  <span>Facebook</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="!#"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <FaLinkedin size ={20} className="mr-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className=" w-full my-6 border-gray-700" />
        <div className=" w-full flex flex-wrap items-left  justify-between">
            
        <div className="w-full lg:w-4/12 px-4">
            <div className="text-lg text-left text-gray-500 font-semibold py-1">
                    © 2023 Hackerrank clone
            </div>
            </div>



          <div className=" lg:w-8/12 px-4">
            <ul className="flex flex-wrap list-none pl-0 mb-0">
              <li className="nav-item">
                <span
                  href="#"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Terms of Use</span>
                </span>
              </li>
              <li className="nav-item">
                <span
                  href="#"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Privacy Policy</span>
                </span>
              </li>
              <li className="nav-item">
                <span
                  href="#"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Contact Us</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <footer/>
      </div>
    </footer>
  );
};
export default Footer;




