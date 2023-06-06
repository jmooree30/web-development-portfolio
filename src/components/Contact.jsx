import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    website: "",
    phone: ""
  });

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onClick = (e) => {
    const form = document.querySelector("form");
    if (form.checkValidity()) {
      e.preventDefault();
      const {
        firstName,
        lastName,
        email,
        company,
        message,
        website,
        phone
      } = formState;
      document.getElementById("realFormName").value = "contact";
      document.getElementById("firstName").value = firstName;
      document.getElementById("lastName").value = lastName;
      document.getElementById("email").value = email;
      document.getElementById("company").value = company;
      document.getElementById("message").value = message;
      document.getElementById("website").value = website;
      document.getElementById("phone").value = phone;
      document.getElementById("myForm").submit();
    }
  };

  return (
    <div>
      <div id="fifty" />
      <div className="contact-container" id="max">
        <form>
          <div className="input-container">
            <label>First Name</label>
            <br />
            <input
              onChange={onChange}
              type="text"
              name="firstName"
              required
            />
          </div>
          <div className="input-container">
            <label>Last Name</label>
            <br />
            <input
              onChange={onChange}
              type="text"
              name="lastName"
              required
            />
          </div>
          <div className="input-container">
            <label>Phone Number</label>
            <br />
            <input onChange={onChange} type="tel" name="phone" />
          </div>
          <div className="input-container">
            <label>Website</label>
            <br />
            <input onChange={onChange} type="text" name="website" />
          </div>
          <div className="input-container">
            <label>Company</label>
            <br />
            <input onChange={onChange} type="text" name="company" />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              onChange={onChange}
              type="text"
              name="email"
              required
            />
          </div>
          <div className="textarea-container">
            <label>Message</label>
            <textarea
              onChange={onChange}
              rows={5}
              name="message"
              cols={30}
              required
            />
          </div>
          <button
            className="btn btn-success"
            type="submit"
            name="submit"
            onClick={onClick}
          >
            &nbsp;&nbsp;&nbsp;
            <i className="fa fa-envelope">&nbsp;&nbsp;</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
