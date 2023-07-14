import React from "react";

const ContactForm = () => {
  const onSubmit = () => {
    alert("Submitted!");
  };

  return (
    <div className="contactForm">
      <form>
        <div>
          <label htmlFor="name">Name</label>
        </div>

        <input
          type="text"
          id="name"
          name="name"
        />
        <div>
          <label htmlFor="email-contact">Email</label>
        </div>

        <input
          type="text"
          id="email"
          name="email"
        />
        <div>
          <label htmlFor="message-contact">Message</label>
        </div>

        <input
          type="text"
          id="message-contact"
          name="message"
        />
        <div>
          <input
            type="submit"
            onClick={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
