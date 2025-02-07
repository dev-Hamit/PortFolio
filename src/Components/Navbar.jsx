import pic from "../../../Portfolio/public/Hacker.jpg";
import { RiMenu4Fill } from "react-icons/ri";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Education" },
    { id: 4, text: "Contact" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 max-w-screen-2xl container mx-auto px-4 md:px-20 shadow ">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex space-x-4">
            <img src={pic} className="w-12 h-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-lg cursor-pointer">
              Hami<span className="text-green-600 text-2xl">t</span>
              <p>Web Developer</p>
            </h1>
          </div>

          {/** Desktop Menu */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li key={id} className="cursor-pointer hover:font-bold scale-105 duration-200">
                  
                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
                </li>
              ))}
            </ul>

            {/** Mobile Menu Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <GiTireIronCross size={24} /> : <RiMenu4Fill size={24} />}
            </div>
          </div>
        </div>



        {/** Mobile Menu */} 
        {menu && (
          <div className="md:hidden ">
            <ul className="flex flex-col bg-white  space-y-4 h-screen justify-center items-center">
              {navItems.map(({ id, text }) => (
                <li key={id} className="cursor-pointer hover:font-bold scale-105 duration-200">
                  
                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
                </li>              ))}

            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
