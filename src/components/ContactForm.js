import React from "react";

const ContactForm = () => {
  const onSubmit = () => {
    alert("Submitted!");
  };

  return (
    <div className="contactForm">
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
        />

        <label htmlFor="email-contact">Email</label>
        <input
          type="text"
          id="email"
          name="email"
        />

        <label htmlFor="message-contact">Message</label>
        <input
          type="text"
          id="message-contact"
          name="message"
        />

        <input
          type="submit"
          value="Submit"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
};

export default ContactForm;
