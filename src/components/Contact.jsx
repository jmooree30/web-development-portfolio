import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="fifty"></div>
        <div class="contact-container" id="max">
          <form name="contact" method="POST" netlify="true">
            <div class="input-container">
              <label>First Name</label>
              <br />
              <input type="text" name="firstName" required />
            </div>
            <div class="input-container">
              <label>Last Name</label>
              <br />
              <input type="text" name="lastName" required />
            </div>
            <div class="input-container">
              <label>Phone Number</label>
              <br />
              <input type="tel" name="phone" />
            </div>
            <div class="input-container">
              <label>Website</label>
              <br />
              <input type="text" name="website" />
            </div>
            <div class="input-container">
              <label>Company</label>
              <br />
              <input type="text" name="company" />
            </div>
            <div class="input-container">
              <label>Email</label>
              <input type="text" name="email" required />
            </div>
            <div class="textarea-container">
              <label>Message</label>
              <textarea rows="5" name="message" cols="30" required></textarea>
            </div>
            <button class="btn btn-success" type="submit">
              &nbsp;&nbsp;&nbsp;<i class="fa fa-envelope">&nbsp;&nbsp;</i>
            </button>
          </form>
        </div>
      </div>

    );
  }
}

export default Contact;
