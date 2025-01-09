"use client"
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };
    

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    const userID = process.env.PUBLLIC_KEY;

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setUserInput({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Error:", error)
    }
  }

    return (
      <>
        <motion.div 
        initial={{opacity: 0, y: 100}}
        animate={{
          opacity: 1,
          y: 0,
          transition:{duration:0.5}
        }}
        className="container min-h-[50vh] border-b border-[#333] py-[30px] mx-auto"
      >
        <div className="w-full md:w-[70%] mx-auto">
          <h2 className="text-[40px] md:text-[60px] text-[#e1e1e2] font-semibold mb-8">Get In Touch</h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                name="name" 
                placeholder="Name"
                value={userInput.name}
                onChange={handleChange}
                className="flex-1 bg-transparent border border-[#333] rounded-md p-4 text-[#e1e1e2] focus:text-[#e1e1e2] focus:border-none focus:bg-transparent transition-colors"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email"
                value={userInput.email}
                onChange={handleChange}
                className="flex-1 bg-transparent border border-[#333] rounded-md p-4 text-[#e1e1e2] focus:text-[#e1e1e2] focus:bg-transparent focus:border-none transition-colors"
              />
            </div>
            
            <textarea 
              placeholder="Message" 
              rows="6"
              name="message"
              value={userInput.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-[#333] rounded-md p-4 text-[#e1e1e2] focus:border-none transition-colors"
            ></textarea>
            
            <button 
              type="submit"
              className="px-8 py-4 border border-[#e1e1e2] rounded-md text-[#e1e1e2] focus:text-[#e1e1e2] focus:border-none focus:bg-transparent hover:text-[#333] hover:border-[#333] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="dark"
        toastClassName="font-noto"
        style={{
          '--toastify-color-dark': '#121112',
          '--toastify-text-color-dark': '#e1e1e2',
          '--toastify-color-progress-dark': '#333'
        }}
      />
      </>
    );
};

export default Contact;