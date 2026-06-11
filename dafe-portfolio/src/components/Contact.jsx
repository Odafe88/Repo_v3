import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef()

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

    if (!userInput.name.trim() || !userInput.email.trim() || !userInput.message.trim()) {
      toast.error("Please fill in all fields before submitting.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    

    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    const userID = process.env.USER_KEY;

    try {

      const emailParams = {
        from_name: userInput.name,
        from_email: userInput.email,
        message: userInput.message
      };

      const res = await emailjs.send(serviceID, templateID, emailParams, {userID,});

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
          <h2 className="text-[40px] md:text-[60px] text-[#e1e1e2] font-semibold mb-4">Let&apos;s Work Together</h2>
          <p className="text-[#b0b0b1] text-lg mb-8">Have a technical challenge or enterprise solution in mind? I&apos;d love to discuss how I can help drive your success.</p>
          <form onSubmit={sendEmail} ref={form} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                name="name" 
                placeholder="Your Name"
                value={userInput.name}
                onChange={handleChange}
                className="flex-1 bg-[#1f1f20] border border-[#444] rounded-md p-4 text-[#e1e1e2] placeholder-[#666] focus:text-[#e1e1e2] focus:border-[#7c9dd0] focus:bg-[#1f1f20] transition-colors outline-none"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email"
                value={userInput.email}
                onChange={handleChange}
                className="flex-1 bg-[#1f1f20] border border-[#444] rounded-md p-4 text-[#e1e1e2] placeholder-[#666] focus:text-[#e1e1e2] focus:border-[#7c9dd0] focus:bg-[#1f1f20] transition-colors outline-none"
              />
            </div>
            
            <textarea 
              placeholder="Tell me about your project or inquiry" 
              rows="6"
              name="message"
              value={userInput.message}
              onChange={handleChange}
              className="w-full bg-[#1f1f20] border border-[#444] rounded-md p-4 text-[#e1e1e2] placeholder-[#666] focus:border-[#7c9dd0] transition-colors outline-none"
            ></textarea>
            
            <button 
              type="submit"
              className="px-8 py-3 bg-[#7c9dd0] hover:bg-[#5a7fa8] text-[#121112] font-semibold rounded-md transition-colors"
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
          '--toastify-color-progress-dark': '#7c9dd0'
        }}
      />
      </>
    );
};

export default Contact;
