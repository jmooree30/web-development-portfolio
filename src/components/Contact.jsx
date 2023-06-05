import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
      website: "",
      phone: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    const form = document.querySelector("form");
    if (form.checkValidity()) {
      e.preventDefault();
      let emailObj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        company: this.state.company,
        message: this.state.message,
        website: this.state.website,
        phone: this.state.phone
      };
      fetch("https://desolate-gorge-20931.herokuapp.com/api/email", {
        method: "POST",
        body: JSON.stringify(emailObj),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          alert("message sent!");
          window.location.reload();
        })
        .catch(error => console.error("Error:", error));
    }
  }
  render() {
    return (
      <div>
        <div id="fifty" />
        <div className="contact-container" id="max">
          <form name="contact" netlify>
            <div className="input-container">
              <label>First Name</label>
              <br />
              <input
                onChange={this.onChange}
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <br />
              <input
                onChange={this.onChange}
                type="text"
                name="lastName"
                required
              />
            </div>
            <div className="input-container">
              <label>Phone Number</label>
              <br />
              <input onChange={this.onChange} type="tel" name="phone" />
            </div>
            <div className="input-container">
              <label>Website</label>
              <br />
              <input onChange={this.onChange} type="text" name="website" />
            </div>
            <div className="input-container">
              <label>Company</label>
              <br />
              <input onChange={this.onChange} type="text" name="company" />
            </div>
            <div className="input-container">
              <label>Email</label>
              <input
                onChange={this.onChange}
                type="text"
                name="email"
                required
              />
            </div>
            <div className="textarea-container">
              <label>Message</label>
              <textarea
                onChange={this.onChange}
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
              onClick={this.onClick}
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
