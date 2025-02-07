import React from 'react'
import { CiFacebook, CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri"; // Added missing import

const Footer = () => {
    return (
        <>
            <footer>
                <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-16 mt-16">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
                        {/* Social Media Links */}
                        <div className="mt-6">
                            <div className="flex justify-center md:justify-start gap-4 mt-2">
                                <ul className="flex space-x-5  cursor-pointer ">
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
                    </div>
                </div>
                <div className=' border-t-2 border-gray-200  flex flex-col items-center'>
                    <p>&copy; {new Date().getFullYear()} Hamit. All rights reserved.</p>
                    <p>Developed by <span className='font-semibold text-green-500'>Hamit</span></p>
                </div>
            </footer>

        </>
    )

}


export default Footer