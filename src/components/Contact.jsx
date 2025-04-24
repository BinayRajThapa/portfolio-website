import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const size = useWindowSize();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields before sending", {
        position: "top-center",
      });
      return;
    }

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
          toast.success("Message sent successfully! 🎉", {
            position: "top-center",
          });
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        },
        (error) => {
          console.error(error.text);
          toast.error("Something went wrong 💥", { position: "top-center" });
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-bg text-text py-16 px-6 transition-colors relative">
      <Toaster
        toastOptions={{
          style: {
            background: "#161b22",
            color: "white",
          },
        }}
      />
      {showConfetti && <Confetti width={size.width} height={size.height} />}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-10 text-center font-mono">
          CONTACT ME
        </h2>

        <form ref={form} onSubmit={sendEmail} noValidate className="grid gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 md:p-3 bg-card text-text rounded-md border border-border focus:border-accent text-sm md:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 md:p-3 bg-card text-text rounded-md border border-border focus:border-accent text-sm md:text-base"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="p-2 md:p-3 bg-card text-text rounded-md border border-border focus:border-accent text-sm md:text-base resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-semibold transition-all ${
              isSending
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-accent/30"
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
