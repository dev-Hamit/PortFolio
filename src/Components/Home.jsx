import React from "react";
import pic from "../../public/Profile.jpg";
import { CiFacebook, CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiTelegramLine, RiWhatsappLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import { ReactTyped } from "react-typed";
import '../index.css';

const Home = () => {
  return (
    <>
    <div className="full-screen-section" name="Home">
    <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-16 mt-16">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">

        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 md:mt-0 md:mb-6 py-1">
          <span className="text-lg text-gray-500  md:mt-1.5">Welcome to my Portfolio</span>

          <h1 className="text-4xl md:text-5xl font-bold ">
            Hello, I'm{" "}
            <span className="text-green-600">
              <ReactTyped
                strings={["Hamit", "Developer", "Designer"]}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-4">
            Web Developer with a passion for creating visually stunning and
            user-friendly websites. I specialize in{" "}
            <span className="font-semibold">HTML, CSS, JavaScript, and React.</span>
          </p>

          {/* Social Media Links */}
          <div className="mt-6">
            <h2 className="font-semibold text-gray-700">Find me on:</h2>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <ul className="flex space-x-5 cursor-pointer ">

                <li>
                  <a href="https://www.facebook.com/hamit.b.7/" rel="noopener noreferrer">
                    <CiFacebook className="text-3xl cursor-pointer hover:text-blue-600 transition-transform transform hover:scale-110" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin className="text-3xl cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-110" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <CiYoutube className="text-3xl cursor-pointer hover:text-red-600 transition-transform transform hover:scale-110" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dev-Hamit" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl cursor-pointer hover:text-gray-900 transition-transform transform hover:scale-110" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/7499237235" target="_blank" rel="noopener noreferrer">
                    <RiWhatsappLine className="text-3xl cursor-pointer hover:text-green-400 transition-transform transform hover:scale-110" />
                  </a>
                </li>

              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <h2 className="font-semibold text-gray-700">Currently working on:</h2>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <SiMongodb className="text-3xl text-green-600 cursor-pointer hover:scale-110 transition-transform" />
              <SiExpress className="text-3xl text-gray-700 cursor-pointer hover:scale-110 transition-transform" />
              <SiReact className="text-3xl text-blue-500 cursor-pointer hover:scale-110 transition-transform" />
              <SiNodedotjs className="text-3xl text-green-700 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="md:w-80 md:h-80">
            <img
              src={pic}
              alt="Profile"
              className="w-60 h-60 md:w-80 md:h-80 rounded-3xl object-cover shadow-lg "
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;