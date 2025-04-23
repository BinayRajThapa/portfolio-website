import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks"; // For responsive confetti

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const size = useWindowSize();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_55zmevk",      
        "template_bicuwbj",      
        form.current,
        "Alj31Ct8x_Z8QjqZN"   
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully!");
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong!");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#0d1117] text-white py-16 px-6 relative">
      <Toaster position="top-right" toastOptions={{ style: { background: "#161b22", color: "white" } }} />
      {showConfetti && <Confetti width={size.width} height={size.height} />}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">Get in Touch</h2>

        <form ref={form} onSubmit={sendEmail} className="grid gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-2 md:p-3 bg-[#161b22] text-white rounded-md border border-gray-700 focus:border-green-500 text-sm md:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 md:p-3 bg-[#161b22] text-white rounded-md border border-gray-700 focus:border-green-500 text-sm md:text-base"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-2 md:p-3 bg-[#161b22] text-white rounded-md border border-gray-700 focus:border-green-500 text-sm md:text-base resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-md transition-all text-white font-semibold ${
              isSending
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 shadow-md hover:shadow-green-500/20"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
