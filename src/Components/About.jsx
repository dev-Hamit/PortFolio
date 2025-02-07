import React from 'react';
import Education from './Education';

function About() {
  return (
   <>
   <div name="About" className="max-w-screen-xl mx-auto px-6 md:px-20 py-16 mt-16">
    <h1 className="text-3xl font-bold mb-5">About</h1>
    <p className="text-lg font-light">
      Hellow I am Hamit a passionate Web Developer using technologies like <span className="font-semibold text-green-600">ReactJS, NodeJS, ExpressJS, MongoDB, and Mongoose.</span> I am a self-taught developer who is passionate about creating user-friendly and visually appealing websites.
    </p>
    <br />
    <p className="text-lg font-light">I am excited to work with you and bring your ideas to life. Let's collaborate and create something amazing together!</p>
   <br />
   <p className="text-lg ">Thankyou for visiting my Portfolio ! </p>
   </div>

   </>
  );
}

export default About;