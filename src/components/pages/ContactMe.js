import React, { useState } from "react";
import "../../styles/ContactMe.css";
import { validateEmail } from "../../utils/helpers";

function ContactMe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const contactInput = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }

    const handleFormSubmit = (event) => {
      event.preventDefault();

      if (!validateEmail(email)) {
        setErrorMessage("Not a valid Email Address");
        return;
      }

      setName("");

      setEmail("");
      alert(`Thank you for reaching out ${name}`);
    };
  };

  const styles = {
    contactMeStyle: {
      background: "#F4743B",
    },
    contactMeHeader: {
      fontSize: "30px",
    },
    contactMeText: {
      fontSize: "25px",
    },
  };

  return (
    <div className="contactMe" style={styles.contactMeStyle}>
      <div className="formBox">
        <form className="form">
          <input
            className="formInput"
            value={name}
            name="name"
            onChange={contactInput}
            type="text"
            placeholder="name"
          />
          <input
            className="formInput"
            value={email}
            name="email"
            onChange={contactInput}
            type="email"
            placeholder="email"
          />
          <input
            className="formMessage"
            value={message}
            name="message"
            onChange={contactInput}
            type="text"
            placeholder="Message"
          />
          <button className="submitBtn">Submit</button>
        </form>
      </div>
      <h2 style={styles.contactMeHeader}>Email: jswearingen18@gmail.com</h2>
      <h2 style={styles.contactMeHeader}>Phone: (931)449-9642</h2>
    </div>
  );
}

export default ContactMe;
