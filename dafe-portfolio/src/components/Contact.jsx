import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
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
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="flex-1 bg-transparent border border-[#333] rounded-md p-4 text-[#e1e1e2] focus:border-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 bg-transparent border border-[#333] rounded-md p-4 text-[#e1e1e2] focus:border-none transition-colors"
              />
            </div>
            
            <textarea 
              placeholder="Message" 
              rows="6" 
              className="w-full bg-transparent border border-[#333] rounded-md p-4 text-[#e1e1e2] focus:border-none transition-colors"
            ></textarea>
            
            <button 
              type="submit"
              className="px-8 py-4 border border-[#e1e1e2] rounded-md text-[#e1e1e2] hover:text-[#333] hover:border-[#333] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    );
};

export default Contact;