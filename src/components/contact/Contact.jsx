import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_btufjh5",
      "template_m228h96",
      form.current,
      "2NtffK5pcnkLDfHwH"
    );

    event.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>campuzanojose14
              @gmail.com</h5>
            <a href="mailto:campuzanojose14@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

 

          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>(323) 449-3210</h5>

          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
