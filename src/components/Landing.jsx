import React, { Component } from "react";
import cw from "../assets/cw.png";
import ss from "../assets/ss.png";
import chess from "../assets/chess.png";
import book from "../assets/book.png";
import calc from "../assets/calc.png";
import git from "../assets/git.png";
import bubbleBlog from "../assets/bubble-blog.jpg";
import alex from "../assets/alex.jpeg";
import vlad from "../assets/vlad.jpeg";
import mern from "../assets/mern.jpg";
import game from "../assets/game.png";
import { HashLink as Link } from "react-router-hash-link";
import fancyMac from "../assets/fancy-mac.jpg";
import hands from "../assets/hands.jpg";
import skills from "../assets/skills.png";
import GitHubCalendar from "github-calendar";

export default class Landing extends Component {
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
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollEventHandler = this.scrollEventHandler.bind(this);
    this.isScrolledIntoView = this.isScrolledIntoView.bind(this);
    this.isScrolledIntoViewTwo = this.isScrolledIntoViewTwo.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
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

  handleScroll() {
    this.scrollEventHandler("first-recomend", "fr");
    this.scrollEventHandler("second-recomend", "sr");
  }

  scrollEventHandler(element, direction) {
    if (this.isScrolledIntoViewTwo(document.getElementById(`${element}`))) {
      let view = document.getElementById(`${element}`);
      if (direction == "fr") {
        view.dataset.fr = "1";
        view.style.visibility = "visible";
      }
      if (direction == "sr") {
        view.dataset.fr = "1";
        view.style.visibility = "visible";
      }
    }
  }

  isScrolledIntoView(el) {
    if (el.style.visibility != "visible") {
      var elemTop = el.getBoundingClientRect().top;
      var elemBottom = el.getBoundingClientRect().bottom;
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }
  }
  isScrolledIntoViewTwo(el) {
    if (el.style.visibility != "visible") {
      const elemTop = el.getBoundingClientRect().top;
      const elemBottom = el.getBoundingClientRect().bottom;
      const isMobile =
        navigator.userAgent.match(/iphone|android|blackberry/gi) || false;
      let isVisible;
      if (isMobile) {
        isVisible = elemTop >= 0 && elemBottom - 280 <= window.innerHeight;
      } else {
        isVisible = elemTop >= 0 && elemBottom - 120 <= window.innerHeight;
      }
      return isVisible;
    }
  }

  componentDidMount() {
    const p = document.getElementById("text");
    p.innerHTML = "";
    let n = 0;
    const str =
      "Hello, I'm Jacob! I'm a Full Stack Web Developer from Boston, currently developing for a software company in Sioux Falls, South Dakota. Outside of work, I'm part of the moderation team at 'The Odin Project' and always enjoy helping new Web Developers reach their goals! ";
    let typeTimer = setInterval(function() {
      n = n + 1;
      p.innerHTML = "> " + str.slice(0, n);
      if (n === str.length) {
        clearInterval(typeTimer);
        p.innerHTML = "> " + str;
        n = 0;
        setInterval(function() {
          if (n === 0) {
            p.innerHTML = "> " + str + "|";
            n = 1;
          } else {
            p.innerHTML = "> " + str;
            n = 0;
          }
        }, 500);
      }
    }, 45);

    new GitHubCalendar(".calendar", "jmooree30", { responsive: true });
    window.scrollTo(0, 0);
    let firstRecomend = document.getElementById("first-recomend");
    let secondRecomend = document.getElementById("second-recomend");
    firstRecomend.style.visibility = "hidden";
    secondRecomend.style.visibility = "hidden";
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }
  render() {
    return (
      <div id="landing-top">
        <div className="top-container">
          <div className="header-wrapper">
            <div class="cmd-top">
              <span className="controls red" />
              <span className="controls yellow" />
              <span className="controls green" />
            </div>
            <div class="cmd" id="text" />
          </div>
          <div className="background-image" />
        </div>
        <br />
        <img
          src={skills}
          style={{ height: "225px", width: "375px", border: "none" }}
        />
        <br />
        <br />
        <i className="devicon-javascript-plain" style={{ color: "orange" }} />
        <i className="devicon-meteor-plain colored" />
        <i className="devicon-mongodb-plain colored" />
        <i className="devicon-html5-plain colored" />
        <i className="devicon-css3-plain colored" />
        <i className="devicon-ruby-plain colored" />
        <i className="devicon-rails-plain colored" />
        <div className="container">
          <img className="project-image" src={chess} alt="" />
          <img className="project-image" src={calc} alt="" />
          <img className="project-image" src={cw} alt="" />
          <img className="project-image" src={ss} alt="" />
          <img className="project-image" src={game} alt="" />
          <img className="project-image" src={book} alt="" />
        </div>
        <i className="devicon-github-plain colored" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/IonicaBizau/github-calendar/gh-pages/dist/github-calendar.css"
        />
        <div className="calendar">Loading the data just for you.</div>

        <br />
        <br />
        <div className="container testimonials">
          <div className="recomendation-wrapper" id="first-recomend">
            <img className="recomendation-image" src={alex} />
            <br />
            <i className="recomendation-text">
              "Jacob is one of the hardest working web developers I have met.
              During his internship at CompanyWide, which we happily extended
              from its original duration, he diligently worked on tasks of all
              complexity levels, and was a dedicated team player. He could be
              trusted with all types of work, never failed to live up to the
              challenges we gave him, and listened close for learning from our
              manager of development. I have high hopes for Jacob now that he
              has left CompanyWide to pursue learning React Native full time. I
              highly recommend him for his next position, and hope that he
              continues to fulfil his full potential."
            </i>
            <br />
            <br />
            <div className="recomendation-person">
              - Alexander R. Neary
              <br />
              <br />
              President of CompanyWide, LLC.
            </div>
          </div>
          <br />
          <br />
          <div className="recomendation-wrapper" id="second-recomend">
            <img className="recomendation-image" src={vlad} />
            <br />
            <i className="recomendation-text">
              "I worked with Jacob on numerous projects at the Odin Project an
              open source curriculum. His ability to learn new things and break
              down problems quickly never fails to astound me. He constantly
              takes initiative to build new interesting things which improve the
              project and he never backs down from a problem. The determination
              and motivation that Jacob has makes him a very well-versed
              software developer."
            </i>
            <br />
            <br />
            <div className="recomendation-person">
              {" "}
              - Vlad Saraev <br />
              <br />
              Full-Stack Developer
            </div>
          </div>
        </div>
        <br />
        <br />
        <div>Looking for a Web Developer?</div>
        <br />
        <div className="hands-wrapper">
          <img className="border-center" src={hands} />
        </div>
        <br />
        <br />
        <div id="fifty" />
        <div className="contact-container" id="max">
          <form action="https://formspree.io/jmooree30@gmail.com" method="POST">
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
              <input
                onChange={this.onChange}
                type="text"
                name="website"
                required
              />
            </div>
            <div className="input-container">
              <label>Company</label>
              <br />
              <input
                onChange={this.onChange}
                type="text"
                name="company"
                required
              />
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
              />
            </div>
            <button
              className="btn btn-success"
              type="submit"
              name="submit"
              onClick={this.onClick}
              required
            >
              &nbsp;&nbsp;&nbsp;
              <i class="fa fa-envelope">&nbsp;&nbsp;</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
