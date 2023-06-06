import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="fifty" />
        <div className="contact-container" id="max">
          <form name="contact" method="POST" netlify>
            <div className="input-container">
              <label>First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                required
              />
            </div>
            <div className="input-container">
              <label>Phone Number</label>
              <br />
              <input type="tel" name="phone" />
            </div>
            <div className="input-container">
              <label>Website</label>
              <br />
              <input type="text" name="website" />
            </div>
            <div className="input-container">
              <label>Company</label>
              <br />
              <input type="text" name="company" />
            </div>
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                name="email"
                required
              />
            </div>
            <div className="textarea-container">
              <label>Message</label>
              <textarea
                rows={5}
                name="message"
                cols={30}
                required
              />
            </div>
            <button
              className="btn btn-success"
              type="submit"
            >
              &nbsp;&nbsp;&nbsp;
              <i className="fa fa-envelope">&nbsp;&nbsp;</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
