import React, { useState } from "react";
import axios from "axios";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);
  const [error, setError] = useState(""); // State for handling validation errors
  const [password, setPassword] = useState(""); // State for password input
  const [passwordCorrect, setPasswordCorrect] = useState(false); // State to check if password is correct
  const [passwordError, setPasswordError] = useState(""); // State for password error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return; // Stop form submission
    }

    // Clear error if validation passes
    setError("");

    // Optionally send the data to your backend
    try {
      const response = await axios.post("http://localhost:3000/contacts", {
        name,
        email,
        message,
      });
      console.log(response.data);

      // Store the sent message
      setSentMessages([...sentMessages, { name, email, message }]);

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

      // Show notification
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWhatsappSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return; // Stop form submission
    }

    // Clear error if validation passes
    setError("");

    // Create the message for WhatsApp
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace this with your WhatsApp number (without the + sign)
    const phoneNumber = "7499237235"; // Your phone number here

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp (this will open the WhatsApp app or the web version)
    window.open(whatsappUrl, "_blank");

    // Optionally send the data to your backend
    try {
      const response = await axios.post("http://localhost:3000/contacts", {
        name,
        email,
        message,
      });
      console.log(response.data);

      // Store the sent message
      setSentMessages([...sentMessages, { name, email, message }]);

      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");

      // Show notification
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to delete a message
  const deleteMessage = (index) => {
    const updatedMessages = sentMessages.filter((msg, msgIndex) => msgIndex !== index);
    setSentMessages(updatedMessages);
  };

  // Function to check password
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "Hamit@123"; // Set your common password here

    if (password === correctPassword) {
      setPasswordCorrect(true);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password. Please try again.");
    }
  };

  return (
    <div name="Contact">
      <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-5">Contact me</h1>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col bg-gray-100 p-4 rounded hover:bg-gray-200">
            <div>
              <label className="block mb-2" htmlFor="name">Name</label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">Email</label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="message">Message</label>
              <textarea
                className="border border-gray-400 p-2 w-full"
                name="message"
                id="message"
                rows="5"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-6">
            <button type="button" class="text-white bg-[#25d366] hover:bg-[#128c7e] focus:ring-4 focus:outline-none focus:ring-[#25d366]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#25d366]/55 me-2 mb-2" onClick={handleSubmit} >
                Submit
              </button>


              <button type="button" class="text-white bg-[#25d366] hover:bg-[#128c7e] focus:ring-4 focus:outline-none focus:ring-[#25d366]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#25d366]/55 me-2 mb-2" 
              onClick={handleWhatsappSubmit}>
                WhatsApp Me
              </button>

            </div>
          </form>

          {/* Display error if fields are empty */}
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </div>

        {/* Password Prompt */}
        {!passwordCorrect && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">Enter Password to View Sent Messages</h2>
            <form onSubmit={handlePasswordSubmit} className="flex flex-col bg-gray-100 p-4 rounded hover:bg-gray-200">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 p-2 w-full mb-3"
              />
              <button className="bg-blue-600 text-white px-4 py-2" type="submit">
                Submit
              </button>
            </form>
            {passwordError && <div className="text-red-600 mt-2">{passwordError}</div>}
          </div>
        )}

        {/* Sent Messages Container */}
        {passwordCorrect && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">Sent Messages</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              {sentMessages.length === 0 ? (
                <p className="text-gray-500">No messages sent yet.</p>
              ) : (
                <ul>
                  {sentMessages.map((msg, index) => (
                    <li key={index} className="border-b border-gray-300 py-2">
                      <p><strong>Name:</strong> {msg.name}</p>
                      <p><strong>Email:</strong> {msg.email}</p>
                      <p><strong>Message:</strong> {msg.message}</p>
                      <button
                        onClick={() => deleteMessage(index)}
                        className="text-red-600 mt-2 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {showNotification && (
          <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md text-center shadow-lg">
              <h2 className="text-green-600 text-lg font-bold mb-2">Message Sent Successfully!</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
